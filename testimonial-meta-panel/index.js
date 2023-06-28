/*
* Wordpress Dependencies
*/

import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { useEntityProp } from '@wordpress/core-data';
import { TextControl, SelectControl } from '@wordpress/components';
import { _n} from '@wordpress/i18n';

const TestimonialMeta = () => {
    const [meta, setMeta] = useEntityProp('postType', 'testimonial', 'meta');
    const {
        testimonial_client_name: testimonialClientName,
        testimonial_client_designation: testimonialClientPos,
        testimonial_enable_in_slider: testimonialEnableSlider,
    } = meta
    return(
        <PluginDocumentSettingPanel
            name={_n('Meta', 'owl-testimonial-carousel')}
            title={_n('Meta', 'owl-testimonial-carousel')}
            className="testimonial-meta"
        >
            <TextControl type="text" label={_n('Client Name', 'owl-testimonial-carousel')} value={testimonialClientName} onChange={(value) => setMeta({
                ...meta,
                testimonial_client_name: value
            })}/>
            <TextControl type="text" label={_n('Client Position', 'owl-testimonial-carousel')} value={testimonialClientPos} onChange={(value) => setMeta({
                ...meta,
                testimonial_client_designation: value
            })}/>
            <SelectControl label={_n('Enable in carousel', 'owl-testimonial-carousel')} value={testimonialEnableSlider} options={[
                { label: 'Yes', value: true},
                { label: 'No', value: false},
            ]} onChange={(value) => setMeta({
                ...meta,
                testimonial_enable_in_slider: value
            })}/>
        </PluginDocumentSettingPanel>
    )
}

registerPlugin('testimonial-meta-panel', {
    render: TestimonialMeta,
});