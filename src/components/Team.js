import PersonCard from '@/ui_components/PersonCard';
import React from 'react';

const Team = () => {
  return (
    <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[510px] text-center">
              <span class="mb-2 block text-lg font-semibold text-brand-orange">Unser Team</span>
              <h2 class="mb-4 text-3xl font-bold whitespace-nowrap text-dark sm:text-4xl md:text-[40px] font-primary">
              Mit uns stehen Sie im Recht.
              </h2>
              <p class="text-base text-body-color">
              
              </p>
            </div>
          </div>
        </div>

        <div class="-mx-4 flex sm:flex-wrap md:flex-nowrap justify-center">
            <PersonCard image="/images/team/person_one.jpg" name="Jessica Front" title="CEO"/>
            <PersonCard image="/images/team/person_two.jpg" name="Michael Scott" title="CTO"/>
            <PersonCard image="/images/team/person_three.jpg" name="Dwight Schrute" title="Marketing Officer"/>
            <PersonCard image="/images/team/person_four.jpg" name="Pam Anderson" title="Assistant to the Regional Manager"/>
        </div>
      </div>
    </section>
  );
};

export default Team;
