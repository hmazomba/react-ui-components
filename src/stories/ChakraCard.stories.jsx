import React from 'react';
import ProductCard from './ChakraCard';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Product Card',
  component: ProductCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

const Template = (args) => <ProductCard {...args} />;

export const Primary = Template.bind({});

Primary.args ={
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcanary.contestimg.wish.com%2Fapi%2Fwebimage%2F55505764b8a36c0c1155b6dd-large.jpg%3Fcache_buster%3D09d59e316b9827f310730ca4c11d8382&imgrefurl=https%3A%2F%2Fwww.wish.com%2Fproduct%2Ffuturistic-narrow-cyclops-color-mirrored-lens-visor-sunglasses-fh-55505764b8a36c0c1155b6dd&tbnid=KdkNhWE4mzTfUM&vet=12ahUKEwij3r6Tq5D6AhVE4oUKHQzvAhEQMygUegUIARCpAg..i&docid=J0CL__ttlSXD9M&w=600&h=600&q=futuristic%20visor&ved=2ahUKEwij3r6Tq5D6AhVE4oUKHQzvAhEQMygUegUIARCpAg',
    productName: 'Futuristic Visor',
    desc: 'Nice glass design',
    salePrice: 'R500',
    originalPrice: 'R750'
}
