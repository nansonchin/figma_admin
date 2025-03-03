import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: '3333',
		host: true
	},
	transpileDependencies: [
        'vue-meta',
    ],
	resolve: {
		alias: [
			{
				find: '/~/',
				replacement: `/src/assets/`,
			},
			{
				find: '@/',
				replacement: `/src/`,
			},
		],
	},
	plugins: [
		vue({
			refTransform: true,
			refSugar:true
		}),
		
	],
	
	// vue({
	// 	script: {
	// 		refSugar: any,
	// 		refTransform: any,
	// 	},
	// })
})

// export default {
// 	plugins: [
// 	  vue({
// 		refTransform: true
// 	  })
// 	]
//   }
