import { shallowMount } from '@vue/test-utils'
import ModalAccountCreate from '.'
import { routes } from '../../router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

describe('<ModalAccountCreate/>', () => {
  it('should render a Modal instance', () => {
    const wrapper = shallowMount(ModalAccountCreate, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.vm).toBeDefined()
  })
})
