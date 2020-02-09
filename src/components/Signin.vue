<template>
    <div class="">
        <div class="form">
            <h3>Sign In</h3>
            <div class="form-group">
                <input 
                    type="text" 
                    placeholder="Email"
                    class="form-control"
                    v-model="email"
                />
                <br>
                <input 
                    type="password" 
                    placeholder="Password"
                    class="form-control"
                    v-model="password"
                />
                <br>
                <button class="btn btn-primary" @click="signIn">Sign In</button>
            </div>
            <br>
            <router-link to="/signup">New user ? Sign up</router-link>
            <br>
            <div class="alert alert-danger" role="alert" v-if="isError">
                {{error.message}}
            </div>
            
        </div>
        
    </div>
</template>

<script>
import {firebaseApp} from '../firebaseApp'
export default {
    data() {
        return {
            email:"",
            password:"",
            error: {
                message:""
            },
            isError:false,
        }
    },
    methods: {
        signIn() {
            this.isError = false
            firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
            .catch(error => {
                this.isError = true
                this.error = error
            })
        }
    }
}
</script>