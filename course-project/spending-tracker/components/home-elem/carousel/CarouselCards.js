import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
import data_tmp from '../../../data_tmp';

const CarouselCards = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View
      style={{
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Carousel
        layout="default"
        layoutCardOffset={0}
        ref={isCarousel}
        data={data_tmp}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={10}
        useScrollView={true}
        onSnapToItem={index => setIndex(index)}
      />
      <View>
        <Pagination
          dotsLength={data_tmp.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'white',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
    </View>
  );
};

export default CarouselCards;
