<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Services\StripeService;
use Illuminate\Http\JsonResponse;

class StripeController extends Controller
{
    protected $stripeService;
     //Calling Stripe Service 
    public function __construct(StripeService $stripeService)
    {
        $this->stripeService = $stripeService;
    }

    public function showSubscription()
    {
        return Inertia::render('Subscription');
    }

    public function stripePlans()
    {
        return Inertia::render('Plans');
    }

    public function stripeAuth(): JsonResponse
    {
        $user = Auth::user();
        $result = $this->stripeService->createCustomerIfNeeded($user);

        return response()->json($result, $result['success'] ? 200 : 500);
    }

    public function stripeProfile(): JsonResponse
    {
        $user = Auth::user();
        $result = $this->stripeService->getStripeProfile($user);

        return response()->json($result, $result['success'] ? 200 : 500);
    }

    public function stripePayments(): JsonResponse
    {
        $user = Auth::user();
        $result = $this->stripeService->getPaymentMethods($user);

        return response()->json($result, $result['success'] ? 200 : 500);
    }

    public function stripeInvoices(): JsonResponse
    {
        $user = Auth::user();
        $result = $this->stripeService->getInvoices($user);

        return response()->json($result, $result['success'] ? 200 : 500);
    }

    public function stripeLastPayment(): JsonResponse
    {
        $user = Auth::user();
        $result = $this->stripeService->getLastPayment($user);

        return response()->json($result, $result['success'] ? 200 : 500);
    }

    public function fetchPlans(): JsonResponse
    {
        $result = $this->stripeService->fetchPlans();

        return response()->json($result, $result['success'] ? 200 : 500);
    }

    public function payment(Request $request)
    {
        $planId = $request->query('planId');
        $intent = $this->stripeService->createSetupIntent(Auth::user());

        return Inertia::render('Payment', [
            'planId' => $planId,
            'clientSecret' => $intent->client_secret,
        ]);
    }

    public function createPaymentIntent(Request $request): JsonResponse
    {
        $priceId = $request->input('planId');
        $paymentMethod = $request->input('payment_method');
        $result = $this->stripeService->createSubscription(Auth::user(), $priceId, $paymentMethod);

        return response()->json($result, $result['success'] ? 200 : 500);
    }
}
