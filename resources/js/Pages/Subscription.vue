<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import DangerButton from '@/Components/DangerButton.vue';
import GetEvents from '../Components/GetUserEvents.vue';

import StripeProfile from '@/Components/StripeProfile.vue';
import StripePaymentDetails from '@/Components/StripePaymentDetails.vue';
import StripeSubscriptionDetails from '@/Components/StripeSubscriptionDetails.vue';

import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia'; 
    const isLoading = ref(false);
    const errorMessage = ref(null);
    const successMessage = ref(null);
    const userProfile = ref(null); 
    const checkUserStripeProfile = async () => { 
        isLoading.value = true;  
        errorMessage.value = null;   
        successMessage.value = null; 
        try {
            const response = await axios.get('/stripe/auth');
            if (response.data.success) {
                successMessage.value = response.data.message;
                userProfile.value = response.data.user;
                setTimeout(() => {
                    Inertia.reload();  
                }, 1000);
            }else{
                errorMessage.value = 'Failed to fetch user profile. Please try again later.';
            }
           
        } catch (error) { 
            errorMessage.value = 'Failed to fetch user profile. Please try again later.';
        } finally {
            isLoading.value = false; 
        }

    }; 
    onMounted(() => {
       // checkUserStripeProfile();
    }); 
    


</script>

<template>
    <Head title="Subscription" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Stripe</h2> 
        </template> 
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6  ">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">    
                        <div class="text-center  p-6 text-gray-900 d-flex" v-if="!$page.props.auth.user.stripe_id && !isLoading">  
                            <DangerButton @click="checkUserStripeProfile">Please Complete Your Stripe Profile  </DangerButton>
                        </div>
                        <div class="text-center p-6 text-gray-900 d-flex" v-if="isLoading" >  
                            <button  disabled type="button" class="p-6 py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                                <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                                </svg>
                                Just a moment, we're checking your Stripe profile...
                            </button>
                        </div>   
                        <div  v-if="errorMessage" class="text-center p-6 text-gray-900 d-flex text-red"  >   
                            {{ errorMessage }}
                        </div>   
                        <div  v-if="successMessage" class="text-center p-6 text-gray-900 d-flex text-red"  >   
                            {{ successMessage }}
                        </div>   
                </div>  

                <div class="mb-3 bg-white overflow-hidden shadow-sm sm:rounded-lg" v-if="$page.props.auth.user.stripe_id ">    
                    <div class="text-center  p-6 text-gray-900 d-flex">  
                        <StripeProfile > </StripeProfile>
                    </div> 
                </div>  

                <div class="mb-3 bg-white overflow-hidden shadow-sm sm:rounded-lg" v-if="$page.props.auth.user.stripe_id ">    
                    <div class="text-center  p-6 text-gray-900 d-flex">  
                        <StripePaymentDetails > </StripePaymentDetails>
                    </div> 
                </div>  

                <div class="mb-3 bg-white overflow-hidden shadow-sm sm:rounded-lg" v-if="$page.props.auth.user.stripe_id ">    
                    <div class="text-center  p-6 text-gray-900 d-flex">  
                        <StripeSubscriptionDetails > </StripeSubscriptionDetails>
                    </div> 
                </div>  

              


            </div>  
        </div>  
    </AuthenticatedLayout>
</template>
