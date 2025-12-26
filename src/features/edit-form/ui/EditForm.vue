<script setup lang="ts">
  import type { FormConfig, FormModel } from '@/entities/form/model/types';
  import FormGenerator from '@/widgets/form-generator/ui/FormGenerator.vue';

  const props = defineProps<{
    config: FormConfig;
    modelValue: FormModel;
  }>();

  const emit = defineEmits<{
    (e: 'submit', value: FormModel): void;
    (e: 'cancel'): void;
  }>();

  const onSubmit = (value: FormModel) => {
    emit('submit', value);
  };

  const onCancel = () => {
    emit('cancel');
  };
</script>

<template>
  <div class="form-container">
    <header>{{ config.name }}</header>
    <FormGenerator
      :fields="config.fields"
      :model="modelValue"
      @submit="onSubmit" 
      @cancel="onCancel"
    >
      <template
        v-for="field in config.fields"
        :key="field.name"
        #[field.name]="{ field: slotField }"
      >
        <slot :name="field.name" :field="slotField" />
      </template>
    </FormGenerator>
  </div>
</template>

<style scoped lang="css">
  .form-container {
    max-width: 600px;
    margin: 0 auto;
  }

  header {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
</style>
