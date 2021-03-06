import Vue from '../../../themes/featherweight/node_modules/vue/dist/vue.esm.browser';

const codeSamples = Vue.component('code-samples', {
	// &#x25B2; // up
	// &#x25BC; // down
	template: `
		<div class="flex flex-col md:flex-row w-full rounded-xl bg-white shadow-lg max-w-xl min-h-xs">

			<pre class="md:w-1/2 p-4 bg-white overflow-auto rounded-tl-xl rounded-bl-xl">
{{ selectedSample.source }}
			</pre>

			<ul class="list-reset px-8 py-4 bg-rl-gray-lighter md:w-1/2 rounded-bl-xl md:rounded-bl-none md:rounded-tr-xl rounded-br-xl">
				<li 
					v-for="(sample, idx) in samples" 
					class="select-none has-dropdown pb-2"
					:class="{ 'is-open': idx === selectedSampleIdx, 'border-b-faint': idx !== (samples.length - 1) }"
					@click="setSelected(idx)">
						<div class="flex justify-between px-2 my-4">
							<div class="text-rl-gray font-bold">{{ sample.title }}</div>
							<div class="arrow"></div>
						</div>
						<div class="content text-grey-darker px-2 description">
							{{ sample.description }}
						</div>
				</li>
			</ul>

		</div>
	`,
	data() {
		return {
			selectedSampleIdx: 0,
			samples: window.codeSamples
		};
	},
	computed: {
		selectedSample() {
			return this.samples[this.selectedSampleIdx];
		}
	},
	methods: {
		setSelected(idx) {
			this.selectedSampleIdx = idx;
		}
	}
});

export default codeSamples;
