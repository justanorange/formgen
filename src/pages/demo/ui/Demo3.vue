<script setup lang="ts">
  import { ref } from 'vue';
  // @ts-ignore
  import { useStore } from 'vuex';

  import type { FormConfig, FormModel } from '@/entities/form/model/types';
  import EditForm from '@/features/edit-form/ui/EditForm.vue';

  const store = useStore();

  const formConfig = ref<FormConfig>({
    name: 'Feedback Form',
    fields: [
      {
        name: 'subject',
        label: 'Subject',
        type: 'input',
        inputType: 'text',
        placeholder: 'Enter the subject'
      },
      {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'Enter your message'
      },
      {
        name: 'rating',
        label: 'Rating',
        type: 'radio',
        options: [
          { value: '1', text: '1 - Poor' },
          { value: '2', text: '2 - Fair' },
          { value: '3', text: '3 - Good' },
          { value: '4', text: '4 - Very Good' },
          { value: '5', text: '5 - Excellent' },
        ],
      },
    ],
  });

  const formData = ref({
    subject: 'Feedback on your service',
    message: 'I really enjoyed using your product.',
    rating: '5',
  });

  const handleSubmit = (data: FormModel) => {
    store.dispatch('feedback/submitForm', data);
    alert('Message form submitted and saved to store!');
    formData.value = {
      subject: '',
      message: '',
      rating: '',
    };
  };

  const handleCancel = () => {
    alert('Form cancelled!');
  };
</script>

<template>
  <EditForm :config="formConfig" v-model="formData" @submit="handleSubmit" @cancel="handleCancel" />
</template>
