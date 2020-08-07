<template>
    <v-app>
        <v-container>
            <v-row justify="center">
                <v-col cols="12">
                    <v-alert
                        v-model="alert.isShown"
                        border="left"
                        close-text="Close Alert"
                        color="#f44336"
                        dark
                        type="error"
                        dismissible
                        >
                       {{ alert.text }}
                    </v-alert>
                    <v-card>
                        <v-card-title>
                        Contacts
                        <v-dialog v-model="dialog" max-width="500px" ref="form">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="primary"
                                dark
                                class="mb-2 ml-3"
                                v-bind="attrs"
                                v-on="on"
                                >New Contact</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field 
                                                ref="name"
                                                v-model="formData.name" 
                                                :validate-on-blur="true"
                                                :error="inputError.name.error"
                                                :error-messages="inputError.name.error_messages"
                                                label="Name">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field
                                                ref="age"
                                                v-model="formData.age" 
                                                :validate-on-blur="true"
                                                :error="inputError.age.error"
                                                :error-messages="inputError.age.error_messages"
                                                type="number"
                                                label="Age">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field 
                                                ref="email"
                                                v-model="formData.email" 
                                                type="email"
                                                :error="inputError.email.error"
                                                :error-messages="inputError.email.error_messages"
                                                :validate-on-blur="true"
                                                label="Email Address">
                                                </v-text-field>
                                            </v-col>
                                            
                                            <v-col cols="12" sm="6" md="6">
                                                <v-select
                                                    ref="gender"
                                                    :items="['Male', 'Female']"
                                                    label="Gender"
                                                    v-model="formData.gender"
                                                    :validate-on-blur="true"
                                                    :error="inputError.gender.error"
                                                    :error-messages="inputError.gender.error_messages"
                                                ></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field 
                                                    ref="contact"
                                                    v-model="formData.contact"
                                                    :validate-on-blur="true"
                                                    :error="inputError.contact.error"
                                                    :error-messages="inputError.contact.error_messages"
                                                    type="number"
                                                    label="Contact Number">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field 
                                                ref="address"
                                                v-model="formData.address"
                                                :validate-on-blur="true"
                                                :error="inputError.address.error"
                                                :error-messages="inputError.address.error_messages"
                                                label="Full Address">
                                                </v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="submit">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                        </v-card-title>
                        <v-data-table
                            :headers="headers"
                            :items="datas"
                            :items-per-page="10"
                            :search="search"
                            sort-by="created_at"
                            :sort-desc="true"
                            class="elevation-1"
                        >
                        <template v-slot:top>
                            </template>
                                <template v-slot:item.actions="{ item }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon
                                    small
                                    @click="deleteItem(item)"
                                >
                                    mdi-delete
                                </v-icon>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>

export default {
    data: () => ({
        dialog: false,
        datas:[],
        search:'',
        headers:[
            {
                text: 'Name',
                align: 'start',
                sortable: true,
                value: 'name'
            },
            {
                text: 'Email Address',
                align: 'start',
                sortable: true,
                value: 'email'
            },
            {
                text: 'Age',
                align: 'start',
                sortable: true,
                value: 'age'
            },
            {
                text: 'Gender',
                align: 'start',
                sortable: true,
                value: 'gender'
            },
            {
                text: 'Contact Number',
                align: 'start',
                sortable: true,
                value: 'contact'
            },
            {
                text: 'Full Address',
                align: 'start',
                sortable: true,
                value: 'address'
            },
            {
                text: 'Created At',
                align: 'start',
                sortable: true,
                value: 'created_at'
            },
            { text: 'Actions', value: 'actions', sortable: false }
        ],
        formData:{
            id: null,
            name: null,
            email: null,
            age: null,
            gender: null,
            contact: null,
            address: null,
        },
        inputError:{
            name: {
                error:false,
                error_messages:[]
            },
            email: {
                error:false,
                error_messages:[]
            },
            age: {
                error:false,
                error_messages:[]
            },
            gender: {
                error:false,
                error_messages:[]
            },
            contact: {
                error:false,
                error_messages:[]
            },
            address: {
                error:false,
                error_messages:[]
            },
        },
        alert:{
            isShown: false,
            text: ''
        }
    }),
    computed:{
        formTitle: function(){
            return !this.formData.id ? 'Add New Contact' : 'Update Contact'
        }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    methods:{
        close () {
            this.dialog = false
            this.$nextTick(() => {
                Object.keys(this.formData).forEach(f => {
                    this.formData[f] = null;
                })
                Object.keys(this.inputError).forEach(f => {
                    this.inputError[f].error = false
                    this.inputError[f].error_messages = []
                })
            })
        },
        getContacts (){
            var self = this
            self.datas = []
            axios.get('/contacts')
                .then( response => {
                    self.alert.isShown = false;
                    _.forEach(response.data, function(value) {
                        self.datas.push({
                            id: value.id,
                            name: value.name,
                            email: value.email,
                            age: value.age,
                            gender: value.gender,
                            contact: value.contact,
                            address: value.address,
                            created_at: value.created_at
                        })
                    });
                })
                .catch( error => {
                    self.alert.isShown = true
                    self.alert.text = 'Something went wrong..'
                });
        },
        deleteContact(id){
            var self = this
            axios.delete(`/contact/delete/${id}`)
                .then( response => {
                    if(response.data.success){
                        self.alert.isShown = false;
                        self.getContacts()
                    }
                })
                .catch( error => {
                    self.alert.isShown = true;
                    self.alert.text = 'Something went wrong..'
                });
        },
        editItem (item) {
            this.formData = Object.assign({}, item)
            this.dialog = true
        },
        deleteItem (item) {
            confirm('Are you sure you want to delete this contact?') && this.deleteContact(item.id)
        },
        submit () {
            var self = this
            Object.keys(self.inputError).forEach(f => {
                self.inputError[f].error = false
                self.inputError[f].error_messages = []
            })
            axios.post('/contact/updateOradd', this.formData)
                .then( response => {
                    if(response.data.success){
                        self.dialog = false
                        self.alert.isShown = false;
                        self.getContacts()
                        Object.keys(self.formData).forEach(f => {
                            self.formData[f] = null;
                        })
                    }
                })
                .catch( error => {
                    self.alert.isShown = true;
                    self.alert.text = 'Something went wrong..'
                    Object.keys(error.response.data.errors).forEach(k =>{
                        self.inputError[k].error = true
                        _.forEach(error.response.data.errors[k], function(value){
                            self.inputError[k].error_messages.push(value)
                        })
                    })
                });
        },
    },
    created: function() {
        this.getContacts()
    },
}
</script>