import { Company } from "../components/Company";
import { Help } from "../components/Help";
import { NewsLetter } from "../components/NewsLetters";
import { SocialMedia } from "../components/SocialMedia";

export function Footer() {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <div className="w-auto h-9 font-bold text-4xl">Crafty</div>

            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Crafty empowers you to effortlessly create stunning websites. With
              intuitive tools and customizable features, bring your vision to
              life and showcase your unique online presence with beauty and
              ease.
            </p>

            <SocialMedia />
          </div>

          <Company />
          <Help />
          <NewsLetter />
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright 2024, All Rights Reserved by Crafty
        </p>
      </div>
    </section>
  );
}
