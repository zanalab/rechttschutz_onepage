import React from 'react';
import Image from 'next/image';

const PersonCard = (props) => {
  return (
    <div class="w-full px-4 md:w-1/2 xl:w-1/4">
      <div class="mx-auto mb-10 w-full max-w-[370px]">
        <div class="relative overflow-hidden rounded-lg">
          <Image
            src={props.image}
            height={500}
            width={400}
            alt="Team Person"
            className="w-full"
          />
          <div class="w-full text-center" >
            <div class="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
              <h3 class="text-base font-semibold text-dark">{props.name}</h3>
              <p class="text-sm text-body-color">{props.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
