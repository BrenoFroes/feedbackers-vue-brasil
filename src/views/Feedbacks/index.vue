<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>
  <div class="flex flex-col justify-center items-center h-64 bg-brand-gray">
    <h1 class="text-4xl font-black text-center text-gray-800">
      Feedbacks
    </h1>
    <p class="text-lg text-center text-gray-800 fontregular">
      Detalhes de todos os feedbacks recebidos.
    </p>
  </div>
</template>
<script>
import HeaderLogged from '@/components/HeaderLogged'
export default {
  components: {
    HeaderLogged
  }
}
</script>
