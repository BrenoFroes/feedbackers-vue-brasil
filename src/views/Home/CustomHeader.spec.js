import { mount, shallowMount } from '@vue/test-utils'
import CustomHeader from '.'
import { routes } from '../../router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

describe('<CustomHeader/>', () => {
  it('should render a vue instance', () => {
    const wrapper = shallowMount(CustomHeader, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.vm).toBeDefined()
  })
  it('should show a modal account create', async () => {
    const wrapper = mount(CustomHeader, {
      global: {
        plugins: [router]
      }
    })
    const buttonAccountCreate = wrapper.find('#header-create-account-button')
    await buttonAccountCreate.trigger('click')
    expect(wrapper.find('#modal-create-account')).toBeDefined()
  })
})
