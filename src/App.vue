<template>
  <div>
    {{ $t('helloWorld') }}
    <div>
      <div><input type="radio" value="en_GB" v-model="$i18n.locale"> English</div>
      <div><input type="radio" value="ru_RU" v-model="$i18n.locale"> Russian</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>