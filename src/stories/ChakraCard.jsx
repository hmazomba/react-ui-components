import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

function ProductCard({image, productName, desc, salePrice, originalPrice}) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {productName}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {desc}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              {salePrice}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              {originalPrice}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default ProductCard
ProductCard.propTypes = {
  /**
   * The product image
   */
  image: PropTypes.string,
  /**
   * What background color to use
   */
  productName: PropTypes.string,
  /**
   * How large should the button be?
   */
  desc: PropTypes.string,
  /**
   * Button contents
   */
  salePrice: PropTypes.string,
  /**
   * Optional click handler
   */
  original: PropTypes.string,
};

ProductCard.defaultProps = {
  image: "https://images.unsplash.com/photo-1599394407175-b6da85464b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnV0dXJpc3RpY3xlbnwwfHwwfHw%3D&w=1000&q=80",
  productName: "a nice cube",
  desc: 'Cube From Space',
  salePrice: 'R150 000',
  originalPrice: 'R450 000'
};