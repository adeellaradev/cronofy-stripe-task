<?php

namespace App\Services;

use Stripe\StripeClient;
use Illuminate\Support\Facades\Auth;
use Exception;

class StripeService
{
    protected $stripe;
     // Stripe Service 
    public function __construct()
    {
        $this->stripe = new StripeClient(env('STRIPE_SECRET'));
    }

    public function createCustomerIfNeeded($user)
    {
        try {
            if (!$user->hasStripeId()) {
                $user->createAsStripeCustomer();
                return ['success' => true, 'message' => 'Stripe customer created successfully.'];
            }
            return ['success' => false, 'message' => 'User already has a Stripe customer ID.'];
        } catch (Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    public function getStripeProfile($user)
    {
        try {
            if (!$user->hasStripeId()) {
                return ['success' => false, 'message' => 'User does not have a Stripe customer ID.'];
            }
            return ['success' => true, 'profile' => $user->asStripeCustomer()];
        } catch (Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    public function getPaymentMethods($user)
    {
        try {
            $paymentMethods = $user->paymentMethods();
            return [
                'success' => true,
                'payment_methods' => $paymentMethods->map(function ($paymentMethod) {
                    return [
                        'id' => $paymentMethod->id,
                        'type' => $paymentMethod->type,
                        'card' => $paymentMethod->card,
                    ];
                })
            ];
        } catch (Exception $e) {
            return ['success' => false, 'error' => 'Failed to fetch payment methods: ' . $e->getMessage()];
        }
    }

    public function getInvoices($user)
    {
        try {
            $invoices = $user->invoices();
            return [
                'success' => true,
                'invoices' => $invoices->map(function ($invoice) {
                    return [
                        'id' => $invoice->id,
                        'amount_due' => $invoice->amount_due,
                        'amount_paid' => $invoice->amount_paid,
                        'amount_remaining' => $invoice->amount_remaining,
                        'status' => $invoice->status,
                        'created_at' => $invoice->created_at,
                    ];
                })
            ];
        } catch (Exception $e) {
            return ['success' => false, 'error' => 'Failed to fetch invoices: ' . $e->getMessage()];
        }
    }

    public function getLastPayment($user)
    {
        try {
            $invoices = $this->stripe->invoices->all([
                'customer' => $user->stripe_id,
                'limit' => 1,
            ]); 
            if (count($invoices->data) > 0) {
                $lastInvoice = $invoices->data[0];  
                return [
                    'success' => true, 
                    'invoice' => $lastInvoice
                ];
            } else {
                
                return [
                    'success' => true, 
                    'invoice' => null,  
                ];
            } 
        } catch (Exception $e) {
            return ['success' => false, 'error' => 'Failed to fetch last payment from Stripe: ' . $e->getMessage()];
        }
    }

    public function fetchPlans()
    {
        try {
            $plans = $this->stripe->plans->all();
            return ['success' => true, 'plans' => $plans->data];
        } catch (Exception $e) {
            return ['success' => false, 'error' => 'Failed to fetch Stripe plans: ' . $e->getMessage()];
        }
    }

    public function createSubscription($user, $priceId, $paymentMethod)
    {
        try {
            $subscription = $user->newSubscription($priceId, $priceId)->create($paymentMethod);
            return $subscription
                ? ['success' => true, 'message' => 'Subscription has been complete.']
                : ['success' => false, 'message' => 'Error while creating subscription.'];
        } catch (Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    public function createSetupIntent($user)
    {
        try {
            return $user->createSetupIntent();
        } catch (Exception $e) {
            throw new Exception('Failed to create setup intent: ' . $e->getMessage());
        }
    }

    public function getUserSubscriptionDetails($user)
    {
        try {
            $subscriptions = $this->stripe->subscriptions->all([
                'customer' => $user->stripe_id,
                'status' => 'active',
            ]);

            if (empty($subscriptions->data)) {
                return ['success' => false, 'message' => 'No active subscriptions found for this user.'];
            }

            $subscriptionDetails = [];
            foreach ($subscriptions->data as $subscription) {
                foreach ($subscription->items->data as $item) {
                    $subscriptionDetails[] = [
                        'id' => $subscription->id,
                        'amount' => number_format($item->price->unit_amount / 100, 2),  // Convert amount from cents to dollars
                        'currency' => strtoupper($item->price->currency),
                        'start_date' => date('Y-m-d', $subscription->current_period_start),
                        'end_date' => date('Y-m-d', $subscription->current_period_end),
                        'status' => $subscription->status,
                        'product' => $this->stripe->products->retrieve($item->price->product, []),
                    ];
                }
            }

            return ['success' => true, 'subscriptions' => $subscriptionDetails];
        } catch (Exception $e) {
            return ['success' => false, 'error' => 'Failed to fetch subscription details: ' . $e->getMessage()];
        }
    }



}
