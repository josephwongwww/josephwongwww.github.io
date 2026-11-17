<template>
  <section id="inquiry" class="inquiryPanel" aria-labelledby="inquiry-title">
    <div class="inquiryIntro">
      <p class="eyebrow">WIN CHOICE / {{ t('nav.contact') }}</p>
      <h1 id="inquiry-title">{{ t('conversion.inquiryTitle') }}</h1>
      <p>{{ t('conversion.inquiryDesc') }}</p>
      <a class="inquiryEmail" href="mailto:julian@win-choice.com">julian@win-choice.com</a>
      <a href="tel:+85268249042">{{ t('conversion.call') }} · +852 68249042</a>
    </div>
    <div class="inquiryForm">
      <label for="inquiry-product">{{ t('conversion.product') }}</label>
      <select id="inquiry-product" v-model="productId">
        <option value="">{{ t('conversion.general') }}</option>
        <option v-for="(item, index) in products" :key="index" :value="String(index + 1)">{{ item.title }}</option>
      </select>
      <div class="inquiryFields">
        <div><label for="inquiry-name">{{ t('conversion.name') }}</label><input id="inquiry-name" v-model="name" autocomplete="organization" /></div>
        <div><label for="inquiry-email">{{ t('conversion.email') }}</label><input id="inquiry-email" v-model="email" type="email" autocomplete="email" /></div>
      </div>
      <label for="inquiry-quantity">{{ t('conversion.quantity') }}</label>
      <input id="inquiry-quantity" v-model="quantity" inputmode="numeric" />
      <label for="inquiry-message">{{ t('conversion.message') }}</label>
      <textarea id="inquiry-message" v-model="message" rows="4" :placeholder="t('conversion.placeholder')" />
      <a class="action primary" :href="mailHref">{{ t('conversion.send') }}</a>
      <p class="inquiryNote">{{ t('conversion.note') }} <a href="mailto:julian@win-choice.com">julian@win-choice.com</a></p>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '../i18n'

const { t } = useI18n()
const route = useRoute()
const products = computed(() => t('product.items'))
const productId = ref('')
const name = ref('')
const email = ref('')
const quantity = ref('')
const message = ref('')
watch(() => route.query.product, value => {
  const id = Number(value)
  productId.value = Number.isInteger(id) && id >= 1 && id <= products.value.length ? String(id) : ''
}, { immediate: true })
const mailHref = computed(() => {
  const product = products.value[Number(productId.value) - 1]?.title || t('conversion.general')
  const subject = `Win Choice — ${product}`
  const body = [
    `${t('conversion.product')}: ${product}`,
    `${t('conversion.name')}: ${name.value}`,
    `${t('conversion.email')}: ${email.value}`,
    `${t('conversion.quantity')}: ${quantity.value}`,
    '', `${t('conversion.message')}:`, message.value
  ].join('\r\n')
  return `mailto:julian@win-choice.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})
</script>
