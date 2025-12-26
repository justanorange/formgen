<script setup lang="ts">
  import { ref } from 'vue';
  // @ts-ignore
  import { useStore } from 'vuex';

  import type { FormConfig, FormModel } from '@/entities/form/model/types';
  import EditForm from '@/features/edit-form/ui/EditForm.vue';

  const store = useStore();

  const formConfig = ref<FormConfig>({
    name: 'Settings',
    fields: [
      {
        name: 'login',
        label: 'Login',
        type: 'input',
        inputType: 'text',
        placeholder: 'Enter your login'
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        inputType: 'password',
        placeholder: 'Enter your password'
      },
      {
        name: 'theme',
        label: 'Theme',
        type: 'select',
        options: [
          { value: 'light', text: 'Light' },
          { value: 'dark', text: 'Dark' },
          { value: 'system', text: 'System Default' },
        ],
      },
      {
        name: 'color',
        label: 'Brand Color',
        type: 'input',
        inputType: 'color',
        placeholder: 'Choose your favorite color'
      },
      {
        name: 'notifications',
        label: 'Notifications',
        type: 'checkbox',
        options: [
          { value: 'email', text: 'Email Notifications' },
          { value: 'sms', text: 'SMS Notifications' },
          { value: 'push', text: 'Push Notifications' },
        ],
      },
    ],
  });

  const storeData = store.getters['settings/getCurrentData'];

  const formData = ref(Object.keys(storeData).length ? storeData : {
    login: 'johndoe',
    password: 'password123',
    theme: 'dark',
    color: '#ff0000',
    notifications: ['email', 'push'],
  });

  const handleSubmit = (data: FormModel) => {
    store.dispatch('settings/submitForm', data);
    alert('Settings form submitted and saved to store!');
  };

  const handleCancel = () => {
    alert('Form cancelled!');
  };
</script>

<template>
  <EditForm :config="formConfig" v-model="formData" @submit="handleSubmit" @cancel="handleCancel">
    <template #color="{ field }">
      <div>
        <label :for="field.name">Choose your color</label><br>
        <input
          type="color"
          :id="field.name"
          v-model="formData.color"
        />
      </div>
    </template>
  </EditForm>
</template>
