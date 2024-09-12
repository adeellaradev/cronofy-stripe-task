<script setup>
   import { ref, onMounted } from 'vue';
   import axios from 'axios';
 
     

</script>

<template>
     

    <h2 class="font-semibold text-xl text-gray-800 leading-tight">  System Profile </h2>
    <hr>
    <br>
    <div >
        <p><strong>Name:</strong> {{ $page.props.auth.user.name }}</p>
        <p><strong>Email:</strong> {{ $page.props.auth.user.email }}</p>
        <p><strong>Member Since:</strong> {{ new Date($page.props.auth.user.created_at).toLocaleDateString() }}</p>
    </div> 
     
     


</template>
