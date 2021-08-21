<template>
  <v-container class="fill-height">
    <v-card class="rounded-xl" min-height="580" width="100%">
      <v-row no-gutters>
        <v-col cols="12" md="5" class="pa-10">
          <h2 class="mb-4">ITGG</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            soluta assumenda in
          </h3>
          <span>Welcome Back, Please login to your account.</span>
          <v-form class="mt-8">
            <v-text-field name="email" label="Email Address" outlined></v-text-field>
            <v-text-field name="password" label="Password" outlined></v-text-field>
            <div class="text-right">
              <v-btn class="text-capitalize pa-0" color="purple" text>
                Forgot Password?
              </v-btn>
            </div>
            <div class="mt-15">
              <v-btn color="purple" dark depressed>Login</v-btn>
              <v-btn color="purple" outlined depressed>Sign up</v-btn>
            </div>
          </v-form>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="0" md="7">
          <v-card
            class="elevation-0 rounded-xl"
            height="100%"
            style="border-top-left-radius: 0px !important; border-bottom-left-radius: 0px !important"
          >
            <v-img
              :src="require('~/assets/images/space/bg.jpg')"
              height="580"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
