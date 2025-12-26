<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
// @ts-ignore
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();
const demoId = computed(() => route.params.id as string);

const DynamicComponent = computed(() => {
  const id = demoId.value;
  if (!id) return null;
  
  return defineAsyncComponent({
    loader: () => import(`./Demo${id}.vue`),
  });
});

const feedbacks = computed(() => ({
  profile: store.getters['profile/getCurrentData'],
  settings: store.getters['settings/getCurrentData'],
  messages: store.getters['feedback/getMessages'],
}));
</script>

<template>
  <div>
    <div v-if="demoId">
      <RouterLink to="/demo" class="back-link">&larr; Back to Demos</RouterLink>
      <component :is="DynamicComponent" :key="demoId" />
    </div>
    <div v-else>
      <p>Select a demo to view.</p>
      <nav>
        <RouterLink to="/demo/1">Demo 1</RouterLink> | 
        <RouterLink to="/demo/2">Demo 2</RouterLink> | 
        <RouterLink to="/demo/3">Demo 3</RouterLink>
      </nav>
      <div v-if="feedbacks.profile || feedbacks.settings || feedbacks.messages.length > 0" style="margin-top: 2rem;">
        <h3>Stored Data:</h3>
        <div v-if="feedbacks.profile">
          <h4>Current Profile:</h4>
          <pre>{{ JSON.stringify(feedbacks.profile, null, 2) }}</pre>
        </div>
        <div v-if="feedbacks.settings">
          <h4>Current Settings:</h4>
          <pre>{{ JSON.stringify(feedbacks.settings, null, 2) }}</pre>
        </div>
        <div v-if="feedbacks.messages.length > 0">
          <h4>Form Messages:</h4>
          <ul>
            <li v-for="msg in feedbacks.messages" :key="msg.id">
              <strong>{{ new Date(msg.timestamp).toLocaleString() }}</strong>: {{ JSON.stringify(msg.data, null, 2) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .back-link {
    display: inline-block;
    margin-bottom: 1rem;
    text-decoration: none;
  }
</style>
