<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class CronofyService
{
    private $baseUrl;
    private $clientId;
    private $clientSecret;

    public function __construct()
    {
        $this->baseUrl = env('CRONOFY_API_BASE_URL');
        $this->clientId = env('CRONOFY_CLIENT_ID');
        $this->clientSecret = env('CRONOFY_CLIENT_SECRET');
    }

    private function getHeaders($accessToken)
    {
        return [
            'Authorization' => "Bearer $accessToken",
            'Content-Type' => 'application/json',
        ];
    }

    public function getCalendars($accessToken)
    {
        $response = Http::withHeaders($this->getHeaders($accessToken))
            ->get("{$this->baseUrl}/v1/calendars");

        if ($response->successful()) {
            return $response->json();
        }

        throw new \Exception('Failed to retrieve calendars');
    }

    public function getEvents($accessToken, $calendarId)
    {
        $response = Http::withHeaders($this->getHeaders($accessToken))
            ->get("{$this->baseUrl}/v1/events", [
                'calendar_ids[]' => $calendarId,
                'from' => now()->startOfDay()->toDateString(),
                'to' => now()->addMonth()->endOfDay()->toDateString(),
                'tzid' => 'UTC',
            ]);

        if ($response->successful()) {
            return $response->json();
        }

        throw new \Exception('Failed to retrieve events');
    }

    public function getProfile($accessToken)
    {
        $response = Http::withHeaders($this->getHeaders($accessToken))
            ->get("{$this->baseUrl}/v1/account");

        if ($response->successful()) {
            return $response->json();
        }

        throw new \Exception('Failed to retrieve profile information');
    }

    public function authenticate($authorizationCode)
    {
        $response = Http::asForm()->post("{$this->baseUrl}/oauth/token", [
            'client_id' => $this->clientId,
            'client_secret' => $this->clientSecret,
            'grant_type' => 'authorization_code',
            'code' => $authorizationCode,
            'redirect_uri' => route('cronofy.callback'),
        ]);

        if ($response->successful()) {
            return $response->json();
        }

        throw new \Exception('Failed to authenticate with Cronofy');
    }
}
