import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import HeroSection from '@/components/home/HeroSection.vue'

describe('HeroSection', () => {
  it('View Projects button scrolls to #apps instead of navigating', () => {
    const router = createRouter({
      history: createWebHashHistory(),
      routes: [{ path: '/', component: { template: '<div />' } }],
    })

    const wrapper = mount(HeroSection, {
      global: { plugins: [router] },
    })

    const viewProjectsBtn = wrapper.find('button')
    expect(viewProjectsBtn.exists()).toBe(true)
    expect(viewProjectsBtn.text()).toBe('View Projects')

    // Ensure it's a button with a click handler, not an anchor with href="#apps"
    const anchors = wrapper.findAll('a')
    const badLink = anchors.filter(a => a.attributes('href') === '#apps')
    expect(badLink.length).toBe(0)
  })

  it('About Me links to /about route', () => {
    const router = createRouter({
      history: createWebHashHistory(),
      routes: [
        { path: '/', component: { template: '<div />' } },
        { path: '/about', component: { template: '<div />' } },
      ],
    })

    const wrapper = mount(HeroSection, {
      global: { plugins: [router] },
    })

    const aboutLink = wrapper.findAll('a').find(a => a.text() === 'About Me')
    expect(aboutLink).toBeDefined()
    expect(aboutLink!.attributes('href')).toBe('#/about')
  })
})
