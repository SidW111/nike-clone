import { offer } from "../assets/images"
import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap 
    items-center max-xl:flex-col-reverse
    gap-10 max-content">
      <div className="flex-1 ">
      <img  src={offer}
      width={773} height={687}
      className="object-contain w-full"/>
      </div>
      <div className="flex flex-col flex-1">
     
      <h2 className="mt-10 font-palanquin text-4xl
       capitalize lg:max-w-lg font-bold">
         <span className="text-coral-red 
        inline-block mt-3">
           Special
           </span> 
        <span className="text-coral-red 
        inline-block mt-3">
        </span> Offer
      </h2>
      <p className="mt-4 lg:max-w-lg 
      info-text">
        Ensuring premium comfort and style,
        our meticulously crafted footwear is
        designed to elevate your experience, providing
        you with unmatched quality, innovation,
        and a touch of elegance.
      </p>
      <p className="mt-6 lg:max-w-lg 
      info-text">
        Our dedication to details and excellence
        ensures your satisfaction
      </p>
      <div className="mt-11" 
      >
        <div className="flex flex-wrap gap-6" >
      <Button label="Shop Now" iconURL={arrowRight}/>
      
      <Button label="Learn More"
      backgroundColor="bg-white"
      borderColor="border-slate-gray"
      textColor="text-slate-gray" />
      </div>
      </div>
      </div>
    </section>
  )
}

export default SpecialOffers
