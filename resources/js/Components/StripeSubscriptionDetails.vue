<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// State variables
const errorMessage = ref(null);
const isLoading = ref(false);
const subscriptions = ref(null);

// Function to fetch subscription details
const subscriptionDetails = async () => {
    isLoading.value = true;
    try {
        const response = await axios.get('/stripe/subscription/details');
        if (response.data.success) {
            // Extract and map the subscription data
            subscriptions.value = response.data.subscriptions.map(subscription => ({
                amount: (subscription.amount / 100).toFixed(2), // Convert amount to dollars
                currency: subscription.currency.toUpperCase(),
                startDate: subscription.start_date ,
                endDate: subscription.end_date ,
                product: subscription.product.name, // Assuming product is an object with a name property
                status: subscription.status
            }));
        } else {
            errorMessage.value = response.data.error;
        }
    } catch (error) {
        console.error(error);
        errorMessage.value = 'An error occurred while fetching the subscription details. Please try again later.';
    } finally {
        isLoading.value = false;
    }
};

// Fetch subscription details on component mount
onMounted(() => {
    subscriptionDetails();
    console.log('Fetching subscription details');
});
</script>

<template>
    <div class="flex justify-between items-center mb-4 mt-3 mb-3">
        <h2 class="text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Subscription Details
        </h2>
    </div>

    <!-- Subscription Details Section -->
    <div v-if="subscriptions && subscriptions.length > 0">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(subscription, index) in subscriptions" :key="index">
                    <td>{{ subscription.product }}</td>
                    <td>{{ subscription.amount }} {{ subscription.currency }}</td>
                    <td>{{ subscription.startDate }}</td>
                    <td>{{ subscription.endDate }}</td>
                    <td>{{ subscription.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Fallback for No Subscriptions -->
    <div v-else-if="!isLoading && (!subscriptions || subscriptions.length === 0)">
        <p>No active subscriptions found.</p>
    </div>

    <!-- Loading Spinner -->
    <div v-if="isLoading">
        <div class="flex justify-center my-4">
            <svg class="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 118 8v2a10 10 0 100-20v2a8 8 0 010 16z"></path>
            </svg>
            &nbsp;&nbsp;<strong>Loading subscription details...</strong>
        </div>
    </div>

    <!-- Error Message -->
    <div v-if="errorMessage" class="text-red-500">
        {{ errorMessage }}
    </div>
</template>
