import React from 'react'
import Navabar from '../../components/Navabar'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { OrangeButton, WebDevMainWrapper, WebDevSecondWrapper } from '../../assets/wrapper/WebdevWrapper'
import AdminDrawer from '../../components/AdminDrawer'
import img from '../../assets/images/noupdates.jpg'
import hariImg from '../../assets/images/hariharan.png'


const JavaDSA = () => {

  return (
    <>
      <Navabar />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5px', padding: '2% 5% 0% 5%' }}>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/java-dsa"
            aria-current="page"
          >
            Java-DSA
          </Link>
        </Breadcrumbs>
      </Box>
      <WebDevMainWrapper>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Typography variant='h4' sx={{ fontWeight: '600' }}>Welcome to Java & DSA 🍵  </Typography>

          <Typography variant='h4' textAlign={"center"} sx={{ fontFamily: 'Cedarville Cursive', fontWeight: '600', color: '#ffa500', margin: '2% 0' }}>“Java is like a recipe, it's easy to learn but it take years to become a master” - Tom White</Typography>
          <Typography variant='body1' sx={{ '@media (max-width:900px)': { textAlign: 'justify' } }}>
            Join the Web Spyders Community, a vibrant hub for Java developers and tech enthusiasts! Here, we share and exchange knowledge on all aspects of Java development, from fundamental concepts to advanced frameworks like Spring, Hibernate, and Java EE. Our community is designed to help you stay updated with the latest industry trends, discover new tools and techniques, and enhance your Java programming skills.

            Engage in exciting discussions, participate in collaborative projects, and access exclusive tutorials and resources. Whether you're a newbie looking to learn the basics or a seasoned developer eager to share your expertise, Web Spyders offers something for everyone. Dive into the world of coding challenges, hackathons, and webinars hosted by industry experts. Let's build robust and scalable Java applications together!
          </Typography>


          <Box sx={{ display: 'flex', gap: '20px' }}>
            {/* for admin info  */}
            <AdminDrawer
              imgs={hariImg}
              name={"Hariharan"}
              email={"hariharan19082003@gmail.com"}
              description={"Passionate Java Developer and Data Structures & Algorithms (DSA) Enthusiast with a knack for crafting robust applications and optimizing algorithmic efficiency. Eager to explore the intricacies of Java programming and solve challenging problems with efficient data structures and algorithms."}
              linkedinl={"https://www.linkedin.com/in/hariharanv8248/"}
              portfoliol={"null"}
            />

            <Link href="https://chat.whatsapp.com/DnGV00advE1EoPgOTPP0xN" target='_blank' sx={{ textDecoration: 'none' }}>
              <OrangeButton>Join Us</OrangeButton>
            </Link>
          </Box>
        </Box>
      </WebDevMainWrapper>
      <WebDevSecondWrapper>

        <Typography variant="h4" sx={{ fontWeight: '600' }}>Updated Notes</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '2%' }}>
          <Box>
            <img src={img} alt="" height={300} width={400} />
          </Box>
          <Box>
            <Typography variant='h4'>No updates to fetch</Typography>
          </Box>
        </Box>

      </WebDevSecondWrapper>




    </>
  )
}

export default JavaDSA