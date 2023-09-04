import { shallowMount } from "@vue/test-utils";
import EventItem from './EventItem.vue'

describe("EventItem.vue", () => {
    it("renders event deials correctly", () => {
        const event = {
            _id: '1',
            category: 'Category',
            title: 'Event Title',
            date: '2023-09-10',
            time: '14:00',
            location: 'Event Location',
            interested: false
        }
        const wrapper = mount(EventItem, {
            propsData: {
                event,
                showButtons: true,
                showDeleteButton: true
            }
        })

        expect(wrapper.text()).toContain(event.category)
        expect(wrapper.text()).toContain(event.title)
        expect(wrapper.text()).toContain(event.date)
        expect(wrapper.text()).toContain(event.time)
        expect(wrapper.text()).toContain(event.location)

        expect(wrapper.findComponent({ name: 'ToggleInterest' }).exists()).toBe(true)

        expect(wrapper.findComponent({ name: 'DeleteButton' }).exists()).toBe(true)
    });

    it('emits toggle-interest event when toggleInterest method is called', async () => {
    });

    it('emits event-deleted event when handleEventDeleted method is called', async () => {
    });
    

});