<template>
  <v-card class="mx-auto mt-14" max-width="400">
    <v-card-title class="text-xl-h5 justify-center text-uppercase">Sign In</v-card-title>
    <v-container>
        <v-row justify="center">

        <v-col cols="12" sm="9" md="9">
          <v-text-field
            v-model="formData.email"
            :error="inputError.email.error"
            :error-messages="inputError.email.error_messages"
            label="Username"
            type="email"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="9" md="9">
          <v-text-field
            v-model="formData.password"
            :error="inputError.password.error"
            :error-messages="inputError.password.error_messages"
            label="Password"
            type="password"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="9" md="9">
          <v-btn class="mr-4" block color="primary" :loading="isLoading" @click="doLogin">submit</v-btn>
        </v-col>
        
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
    data: () => ({
        isLoading: false,
        formData:{
            email:null,
            password:null,
        },
        inputError:{
            email: {
                error:false,
                error_messages:[]
            },
            password: {
                error:false,
                error_messages:[]
            },
        },
    }),
    methods:{
        doLogin(){
            this.isLoading = true
            var self = this
            Object.keys(self.inputError).forEach(f => {
                self.inputError[f].error = false
                self.inputError[f].error_messages = []
            })
            axios.post('/login', this.formData)
                .then( response => {
                    self.isLoading = false
                    self.$emit('getLoginResult', true)
                    self.$emit('getLoginDetail', response.data.data)
                    localStorage.setItem('jwt',response.data.data.id)
                    self.$router.push({ name: 'dashboard' })
                })
                .catch( error => {
                    self.isLoading = false
                    if(error.response.status != 422){
                        self.inputError['email'].error = true
                        self.inputError['email'].error_messages.push('These credentials do not match our records.')
                    }else{
                        Object.keys(error.response.data.errors).forEach(k =>{
                            self.inputError[k].error = true
                            _.forEach(error.response.data.errors[k], function(value){
                                self.inputError[k].error_messages.push(value)
                            })
                        })
                    }
                });
        }
    }
}
</script>