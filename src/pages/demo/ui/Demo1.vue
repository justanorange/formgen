<script setup lang="ts">
  import { ref } from 'vue';
  // @ts-ignore
  import { useStore } from 'vuex';

  import type { FormConfig, FormModel } from '@/entities/form/model/types';
  import EditForm from '@/features/edit-form/ui/EditForm.vue';

  const store = useStore();

  const formConfig = ref<FormConfig>({
    name: 'User Profile',
    fields: [
      {
        name: 'username',
        label: 'Username',
        type: 'input',
        inputType: 'text',
        placeholder: 'Enter your username'
      },
      {
        name: 'email',
        label: 'Email',
        type: 'input',
        inputType: 'email',
        placeholder: 'Enter your email'
      },
      {
        name: 'gender',
        label: 'Gender',
        type: 'radio',
        options: [
          { value: 'male', text: 'Male' },
          { value: 'female', text: 'Female' },
        ],
      },
      {
        name: 'bio',
        label: 'Biography',
        type: 'textarea',
        placeholder: 'Tell us about yourself'
      },
      {
        name: 'drivers_license',
        label: 'Driver\'s License',
        type: 'checkbox',
        options: [
          { value: 'A', text: 'Category A' },
          { value: 'B', text: 'Category B' },
          { value: 'C', text: 'Category C' },
          { value: 'D', text: 'Category D' },
          { value: 'E', text: 'Category E' },
        ],
      },
    ],
  });

  const storeData = store.getters['profile/getCurrentData'];

  const formData = ref(Object.keys(storeData).length ? storeData : {
    username: 'John Doe',
    email: 'john.doe@example.com',
    gender: 'male',
    bio: 'Hello! I am John.',
    drivers_license: ['A', 'B'],
  });

  const handleSubmit = (data: FormModel) => {
    store.dispatch('profile/submitForm', data);
    alert('Profile form submitted and saved to store!');
  };

  const handleCancel = () => {
    alert('Form cancelled!');
  };
</script>

<template>
  <EditForm :config="formConfig" v-model="formData" @submit="handleSubmit" @cancel="handleCancel">
    <template #username="{ field }">
      <input
        v-bind="field.attributes"
        v-model="formData.username"
        class="custom-input"
        placeholder="Ваше имя"
      />
    </template>
  </EditForm>
</template>

<style scoped lang="scss">
  .custom-input {
    border: 2px solid #42b983;
    padding: 8px;
    border-radius: 20rem;

    &:hover {
      border-color: #369870;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 5px rgba(66, 185, 131, 0.5);
    }
  }
</style>
