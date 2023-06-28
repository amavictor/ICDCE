import {
    LandingContainer,
    FourFoldsContainer,
    Growth,
    Innovation,
    ConsultancyBusiness,
    ServicesDetails,
    InnovationContainer,
    ImageServices,
    ImageServices2,
    InnovationContainer2, Testimonial, Blog
} from "./Home.styles";
import {Button} from "../../components/button/button";
import Money from "../../assests/gifs/money-bag.gif"
import Handshake from "../../assests/gifs/handshake.gif"
import SocialCare from "../../assests/gifs/social-care.gif"
import Consultancy from "../../assests/gifs/tech-support.gif"
import Business from "../../assests/gifs/line-chart.gif"
import {TextCrad} from "../../components/cards/TextCrad";
import {useState} from "react";

import "swiper/css";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import {testimonials} from "../../testimonials";
import {Carousel} from "../../components/carousel/Carousel";


export const Home = () => {
    const [consultancy, setConsultancy] = useState(false)
    return (
        <>
            <LandingContainer>
                <div>
                    <h1>
                        Scholars Chambers of Commerce Infrastructure Mines and Agriculture
                    </h1>
                    <p>
                        We are dedicated to enriching the lives of farmers, local skill ventures, and service exports.
                        Giving everyone an equal opportunity and leveling the playing field.
                    </p>
                    <Button>Join us!</Button>
                </div>
            </LandingContainer>
            {/*<OfferText>
                <p>What we offer</p>
            </OfferText>*/}
            <FourFoldsContainer>
                <section>
                    <div>
                        <h2>REDEFINING THE LOCAL INDUSTRY</h2>
                        <p>
                            It is simple. We bring traders closer to their customers. Be you a farmer, local craftsman,
                            welder, tailor, etc. We export your goods and service locally and internationally based on
                            your request. We are enabling local farmers to experience global recognition as they put in
                            effort to feed their nation and the world, while adding to their nations GDP. We are also
                            passionate about the traders who are not farmers but offer...
                        </p>
                        <i>Read more</i>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>LEARNING AND EARNING</h2>
                        <p>
                            It is simple. We bring traders closer to their customers. Be you a farmer, local craftsman,
                            welder, tailor, etc. We export your goods and service locally and internationally based on
                            your request. We are enabling local farmers to experience global recognition as they put in
                            effort to feed their nation and the world, while adding to their nations GDP. We are also
                            passionate about the traders who are not farmers but offer...
                        </p>
                        <i>Read more</i>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>REDEFINING THE LOCAL INDUSTRY</h2>
                        <p>
                            It is simple. We bring traders closer to their customers. Be you a farmer, local craftsman,
                            welder, tailor, etc. We export your goods and service locally and internationally based on
                            your request. We are enabling local farmers to experience global recognition as they put in
                            effort to feed their nation and the world, while adding to their nations GDP. We are also
                            passionate about the traders who are not farmers but offer...
                        </p>
                        <i>Read more</i>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>LEARNING AND EARNING</h2>
                        <p>
                            It is simple. We bring traders closer to their customers. Be you a farmer, local craftsman,
                            welder, tailor, etc. We export your goods and service locally and internationally based on
                            your request. We are enabling local farmers to experience global recognition as they put in
                            effort to feed their nation and the world, while adding to their nations GDP. We are also
                            passionate about the traders who are not farmers but offer...
                        </p>
                        <i>Read more</i>
                    </div>
                </section>
            </FourFoldsContainer>
            {/*  <JoiningInfo>
                <div>
                    <h4>What it means to join the family of traders and scholars</h4>
                    <p>
                        We are a community of devoted intellectuals passionate about agriculture and service exports.
                        The hunger to see genuine individuals grow from the grassroot to the highest level in the local careers
                        will never quench. If you are as hungry as we are, please join us.
                    </p>
                </div>
            </JoiningInfo>*/}
            <Growth>
                <h4>Be in the know, on exports</h4>
                <div>
                    <TextCrad
                        image={Money}
                        title={"Financial status"}
                        description={"Stay connected and informed on the current market prices of your goods. Never miss out on it"}
                    />
                    <TextCrad
                        image={Handshake}
                        title={"Connect with trader"}
                        description={"You are not alone on this journey, connect with other like minded traders to share" +
                            "your thoughts and ideas."}
                    />
                    <TextCrad
                        image={SocialCare}
                        title={"Reach your community"}
                        description={"enjoy the possibility of being a sole provider for your family and your community at large"}
                    />
                </div>
            </Growth>

            <Innovation>
                <InnovationContainer>
                    <div>
                        <h5>Services</h5>
                        <h3>View our services</h3>
                        <ConsultancyBusiness>
                            <div>
                                <img
                                    src={Consultancy}
                                    alt={"icon"}
                                />
                                <p onClick={() => setConsultancy(true)}>Consultancy</p>
                            </div>

                            <div>
                                <img
                                    src={Business}
                                    alt={"icon"}
                                />
                                <p onClick={() => setConsultancy(false)}>Business analysis</p>
                            </div>
                        </ConsultancyBusiness>
                    </div>
                    {
                        consultancy ?
                            <ServicesDetails>
                                <div>
                                    <h3>Consultancy</h3>
                                    <p>Get top quality consultancy with our professional advisors </p>
                                </div>
                                <div>
                                    <div>
                                        <h6>To start the business</h6>
                                        <ul>
                                            <li>Get assistance on everything required to get started on your business
                                                from scratch.
                                            </li>
                                            <li>Access to opportunities, funding, and grants</li>
                                        </ul>
                                    </div>
                                    <aside>
                                        <h6>Run the business</h6>
                                        <ul>
                                            <li>If your business had already started, get mentorship to succeed in the
                                                field
                                            </li>
                                        </ul>
                                    </aside>
                                </div>
                            </ServicesDetails>
                            :
                            <ServicesDetails>
                                <div>
                                    <h3>Business Analysis</h3>
                                    <p>We analyze business helping to scale to larger customers</p>
                                </div>
                                <div>
                                    <div>
                                        <h6>Before the business</h6>
                                        <ul>
                                            <li>Let us get you all the necessary data needed for your business analisys.
                                                With information gotten from our data analysts, and surveys, you are
                                                sure
                                                not to miss out on anything important.
                                            </li>
                                            <li>Access to data analysis team.</li>
                                        </ul>
                                    </div>
                                    <aside>
                                        <h6>During the business</h6>
                                        <ul>
                                            <li>Let us make your business better. Don't worry, we've got you covered
                                                both
                                                internationally and locally.
                                            </li>
                                        </ul>
                                    </aside>
                                </div>
                            </ServicesDetails>

                    }

                </InnovationContainer>
                <InnovationContainer2>
                    <ImageServices
                        src={"https://img.freepik.com/free-photo/drone-quad" +
                            "-copter-with-high-resolution-digital-camera-green-corn-field-agro_146671-19045.jpg?w=1060&t=st=1672230471~exp=1672231071~hmac=08ca6b83cc89eec7ebb13eb3f5edef7a7873e99550ed1bce7f15c2eef222ec29"}
                        alt={"image"}
                    />
                    <ImageServices2
                        src={"https://img.freepik.com/free-photo/aerial-view-small-village-country-roadside_1" +
                            "150-2364.jpg?w=1380&t=st=1672235101~exp=1672235701~hmac=fcf6dc602bee18dc6ba539d47b3b7e5f2aa2c8053c886c09c1a87d0864c97fdb"}
                        alt={"image"}
                    />
                </InnovationContainer2>
            </Innovation>

            <Testimonial>
                <div>
                    <h6>Look! people are talking!</h6>
                    <h4>Testimonials</h4>
                    <p>See what people have to say about how we've transformed their businesses,
                        locally and internationally.
                    </p>
                </div>
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {
                            testimonials.map((item,index)=>
                                <div>
                                    <SwiperSlide>
                                        <Carousel
                                            image={item.image}
                                            comment={item.comment}
                                            name={item.name}
                                        />
                                    </SwiperSlide>
                                </div>

                            )
                        }
                    </Swiper>
                </div>
            </Testimonial>

            <Blog>
                <div>
                    <h4>Stay up to date with our blog posts</h4>
                    <div>
                        <div>
                            <img
                                src={"https://img.freepik.com/free-photo/sacks-healthy-legumes-grains_53876-65444.jpg?w=1060&t=st=1672259958~exp=1672260558~hmac=443c3383b4f88b5aab7fd68db31d81f84ebcf8ccfc1b9b66cb902f19fcd22d37"}
                                alt={"blog"}
                            />
                            <h5>Nigeria set to export 500K bags of Rice</h5>
                            <p>The Nigerian government has finally seen the importance of not being a consumer nation...</p>

                        </div>
                        <div>
                            <img
                                src={"https://img.freepik.com/free-photo/group-asia-young-creative-people-smart-casual-wear-discussing-business-brainstorming_7861-3066.jpg?w=1380&t=st=1672260708~exp=1672261308~hmac=ef9f501c5fea980bc09e873faf6a050782e693e1a5c3e08f2ca9376898531c8f"}
                                alt={"blog"}
                            />
                            <h5>Nigeria set to export 500K bags of Rice</h5>
                            <p>The Nigerian government has finally seen the importance of not being a consumer nation...</p>
                        </div>
                        <div>
                            <img
                                src={"https://img.freepik.com/free-photo/wooden-gavel_93675-130731.jpg?w=1060&t=st=1672260736~exp=1672261336~hmac=ddb6bcfa0630a1c07b21cbcbac58035b9ebc6b0ded8db574df2cbb0365b01dc3"}
                                alt={"blog"}
                            />
                            <h5>Nigeria set to export 500K bags of Rice</h5>
                            <p>The Nigerian government has finally seen the importance of not being a consumer nation...</p>
                        </div>
                    </div>
                </div>
            </Blog>


        </>
    )
}