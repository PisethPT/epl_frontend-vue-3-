<script setup>
import { ElButton } from 'element-plus';
import
{
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  Upload,
  Share
} from '@element-plus/icons-vue'
</script>
<template>
  <div class="about flex flex-col">
    <h1>This is an about page</h1>
    <div class="flex flex-wrap mb-4">
      <el-button size="large" :icon="Search" round>Search</el-button>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="primary" size="large">
        Upload<el-icon class="el-icon--right">
          <Upload />
        </el-icon>
      </el-button>
    </div>

    <div class="flex flex-wrap items-center mb-4">
      <el-button size="large">Large</el-button>
      <el-button>Default</el-button>
      <el-button size="small">Small</el-button>
      <el-button size="large" :icon="Search">Search</el-button>
      <el-button :icon="Search">Search</el-button>
      <el-button size="small" :icon="Search">Search</el-button>
    </div>
    <div class="flex flex-wrap items-center mb-4">
      <el-button size="large" round>Large</el-button>
      <el-button round>Default</el-button>
      <el-button size="small" round>Small</el-button>
      <el-button size="large" :icon="Search" round>Search</el-button>
      <el-button :icon="Search" round>Search</el-button>
      <el-button size="small" :icon="Search" round>Search</el-button>
    </div>
    <div class="flex flex-wrap items-center">
      <el-button :icon="Search" size="large" circle />
      <el-button :icon="Search" circle />
      <el-button :icon="Search" size="small" circle />
    </div>

  </div>


</template>

<style scoped>
html,
body {
  background: #1e0021 !important;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
