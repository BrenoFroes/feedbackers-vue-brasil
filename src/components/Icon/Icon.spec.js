import { shallowMount } from '@vue/test-utils'
import Icon from '.'
import Copy from './Copy'
import { routes } from '../../router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

describe('<Icon/>', () => {
  it('should render a Icon', async () => {
    router.push('/')
    await router.isReady()
    const wrapperCopy = shallowMount(Copy)
    const wrapper = shallowMount(Icon, {
      global: {
        plugins: [router]
      },
      propsData: {
        name: wrapperCopy
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.vm).toBeDefined()
  })
})
