'use client';

import React from 'react';

import CategoryItemSection from '@/domains/product/components/CategoryItemSection';
import { MAIN_CATEGORIES_TYPE } from '@/domains/product/constants/mainCategories';

const CategoryListSection = () => (
  <>
    {MAIN_CATEGORIES_TYPE.map((mainCategory) => (
      <CategoryItemSection
        key={mainCategory.id}
        shape={mainCategory.shape}
        title={mainCategory.title}
        subCategories={mainCategory.subCategories}
      />
    ))}
  </>
);
export default CategoryListSection;
