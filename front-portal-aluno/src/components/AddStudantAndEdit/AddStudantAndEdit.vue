<template>
  <div class="modal-overlay ">
    <v-card
    class="mx-auto modal-card"
    max-width="344"
    title="User Registration"
  >
    <v-container>
      <v-text-field
        v-model="first"
        color="primary"
        label="First name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="last"
        color="primary"
        label="Last name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success">
        Complete Registration

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      first: null,
      last: null,
      email: null,
      password: null,
      terms: false,
    }),
    name: "AddStudantAndEdit"
  }
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay background */
  backdrop-filter: blur(5px); /* Blur effect */
  z-index: 2000; /* Ensure the overlay is above the page content */
}

/* Styles for the modal card */
.modal-card {
  position: relative;
  margin: auto; /* Center the modal horizontally */
  top: 50%;
  transform: translateY(-50%); /* Center the modal vertically */
}

/* Styles for the close button inside the modal */
.modal-close-button {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2001; /* Ensure the button is above the modal content */
}
</style>

