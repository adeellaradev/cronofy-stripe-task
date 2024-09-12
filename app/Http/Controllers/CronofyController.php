<?php

namespace App\Http\Controllers;

use App\Services\CronofyService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CronofyController extends Controller
{
    protected $cronofyService;

    public function __construct(CronofyService $cronofyService)
    {
        $this->cronofyService = $cronofyService;
    }

    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }

    public function getEvents()
    {
        try {
            $user = Auth::user();
            $accessToken = $user->cronofy_access_token;
            $calendars = $this->cronofyService->getCalendars($accessToken);
            $calendarId = $calendars['calendars'][0]['calendar_id'];
            $events = $this->cronofyService->getEvents($accessToken, $calendarId);
            return response()->json([
                'calendars' => $calendars,
                'events' => $events['events'],
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function myProfile()
    {
        return Inertia::render('Profile');
    }

    public function getProfile()
    {
        try {
            $user = Auth::user();
            $accessToken = $user->cronofy_access_token;
            $profile = $this->cronofyService->getProfile($accessToken);
            return response()->json([
                'profile' => $profile['account'],
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function redirectToCronofy()
    {
        $clientId = env('CRONOFY_CLIENT_ID');
        $redirectUri = route('cronofy.callback');
        $scope = 'read_events';
        $authorizationUrl = "https://app.cronofy.com/oauth/authorize?response_type=code&client_id=$clientId&redirect_uri=$redirectUri&scope=$scope";
        return redirect($authorizationUrl);
    }

    public function handleCronofyCallback(Request $request)
    {
        $authorizationCode = $request->query('code');
        try {
            $data = $this->cronofyService->authenticate($authorizationCode);
            $accessToken = $data['access_token'];
            $refreshToken = $data['refresh_token'];
            $user = Auth::user();
            $user->cronofy_access_token = $accessToken;
            $user->cronofy_refresh_token = $refreshToken;
            $user->save();
            return redirect()->route('dashboard')->with('success', 'Successfully authenticated with Cronofy.');
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
