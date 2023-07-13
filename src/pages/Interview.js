import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Interview = () => (
  <Main title="Interview" description="Contact Vlad Tereshkov via email @ hi@mldangelo.com">
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Interview</Link>
          </h2>
          <p>I was interviewed at ENF in case you want to learn a bit more about me
            including motherboards, astrophotography and my position on C++
          </p>
        </div>
      </header>
      <p>
        <h1>Architects of Consensus — Hacking the Motherboard with Vlad Tereshkov</h1>
      </p>
      <p>
        <em>
          Architects of Consensus is a series dedicated to shining a light on the unseen figures who
          are developing EOS, and advancing the most battle-tested, highly performant, community run
          blockchain protocol in the world—Antelope. These are the intrepid explorers whose lives
          have traced the elliptic curves and merkle trees of blockchain technology to reveal its
          many potentials, and who have returned to share that knowledge with us.
        </em>
      </p>
      <hr />
      <p>
        Like a modern archaeologist combing through artifacts of the information age both tangible
        and transitory, within vast patterns of data, Vlad Tereshkov has a talent for revealing the
        hidden glimmers of meaning in everything from discarded old motherboards to the human
        genome. A perennial student, a tinkerer, a curious explorer of knowledge-mining and semantic
        systems, Vlad has the kind of levity and good humor one needs to endure, and enjoy, the most
        daunting of puzzles.
      </p>

      <p>
        I sat down with Vlad one afternoon to get some perspective on his current endeavor, EOS,
        where as a Senior Developer for the EOS Network Foundation he’s currently focused on
        creating value-add features for EOS’ underlying protocol, Antelope, and its C++
        implementation, Leap.&nbsp;He ponders where to begin, sips on his mug of herbal tea, smiles,
        and we begin to unravel the story of his experiences with distributed systems in the early
        days of the internet, and into the advent of blockchain technology itself.
      </p>

      <p>
        Vlad is a computer programmer, electronics engineer, inventor, and technology entrepreneur.
        He completed his M.S. in Physics (Nonlinear Waves) at Lomonosov’s Moscow State University in
        1998 and while working on his Ph.D moved to the United States to join the bioinformatics
        revolution of human genome sequencing. After years of building enterprise products in life
        sciences, cybersecurity, computer vision and AI, he joined the EOS community to build a next
        generation blockchain platform. Vlad is now bringing all his experience and knowledge to
        contribute to bear at the EOS Network Foundation, and helping to bring the most secure,
        performant, and scalable blockchain to life.
      </p>

      <p>
        <strong>
          From our few discussions thus far, I can already tell you have quite the storied history.
          What are some of the more notable projects that you’ve worked on blockchain or otherwise?
        </strong>
      </p>

      <p>
        I want to start by saying that I am really proud to be a contributor to EOS, as an engineer
        with the EOS Network Foundation. This is the most exciting and powerful blockchain project
        I’ve ever worked on.
      </p>

      <p>
        From my past experience, I worked on various enterprise software, for example for LabCorp I
        created{' '}
        <a href="https://drugdevelopment.labcorp.com/xcellerate/gain-insights/xcellerate-cra-dashboard.html">
          CRA Dashboard
        </a>{' '}
        that won the{' '}
        <a href="https://www.businesswire.com/news/home/20181207005200/en/Covance-Xcellerate%C2%AE-Wins-Best-Technological-Development-in-Clinical-Trials-Clinical-Sponsor-Focused-at-14th-Annual-Scrip-Awards">
          application of the year award
        </a>
        . That recognition was really great to see. This application helped in conducting clinical
        trials using mobile devices.
      </p>

      <p>
        Working in bioinformatics (InforMax Inc), we created software that was one of the first
        applications to analyze the human genome. That was super exciting because no one looked at
        human genome data before and it was an uncharted territory.&nbsp;
      </p>

      <p>
        Throughout my career, one of my great passions was cybersecurity and especially the
        application of AI in detection of threats, viruses and malware. I have a couple of patents
        in this area. I co-founded a cybersecurity company that analyzed and automatically built a
        threat model by analyzing rejected packets by the next-gen firewall and other data that we
        got by partnering with the largest ISP provider in the US.
      </p>

      <p>
        <strong>
          You’ve been working with computers for a while, and you even mentioned that you created
          your own motherboard at one point, that’s pretty cool. Where did your explorations in
          computer science begin?
        </strong>
      </p>

      <p>
        Yeah, that was in, I think ’92 or ’93. It was a long time ago and there weren’t any kinds of
        personal computers available for any reasonable price. I was deeply interested in
        electronics design. I was spending lots of time tinkering with receivers, amateur radios,
        TV’s, etc. And the first computer I built myself by creating a motherboard, soldering all
        the components to that, connecting that to a TV. And basically that worked quite well. It
        was based on the KR580VM80A processor clocked at 2.5Mhz with 128kb of soldered in memory and
        was running the proprietary ORDOS operating system. And it all kind of started from there.
        When the modems and PC’s became available, I was running my own BBS for many years on OS/2.
      </p>

      <p>
        I was using FidoNet before the internet. I had lots of fun with it. And I think that played
        a significant role in forming my vision and passion for decentralized applications, the ones
        that do not depend on any commercial central entity to operate and control. Right now I can
        definitely see that technology has come a very long way and distributed ledger and P2P
        communications are ready for adoption for many real life use cases.
      </p>

      <p>
        <strong>
          You’ve been experimenting with distributed systems for quite some time, even in the
          pre-blockchain era. What are the main challenges one must confront while developing
          blockchain technology?
        </strong>
      </p>

      <p>
        There are plenty. First of all, there are technological challenges. Making distributed
        applications is hard. And there are lots of things like P2P communications, consensus,
        enormous amounts of storage, quick block production, synchronization of nodes. Also, I would
        say storage of data on a blockchain, running smart contracts, and the ability to integrate
        it into applications. So lots of technical complexities, that’s one thing.
      </p>

      <p>
        Another challenge is not technical at all. I would say more practical. There is a lot of
        work that needs to be done to properly communicate the message of why somebody needs a
        blockchain, how will it make life better? What good will it do for the people or businesses?
        We are at the same spot with blockchain right now as we were with the Internet many years
        ago, when nobody believed it can bring any good.
      </p>

      <p>
        The blockchain community is just developing. I would say it’s still in the very early stages
        despite having been here for how many, thirteen years, but it’s still super super young. I
        want to mention a funny thought here –&nbsp; jumping on the blockchain train is kind of the
        opposite of “Getting to the Cloud”. One of my friends called it “Kill the Cloud”. So that’s
        what decentralized technologies and blockchain should do.&nbsp;
      </p>

      <p>
        <strong>
          The second challenge as you put it was articulating the benefits of why companies should
          leverage blockchain. Could you expand on what you think those advantages are for
          individuals or companies, why they should be using blockchain, or why the world should be
          moving to blockchain infrastructure in general?
        </strong>
      </p>

      <p>
        It’s security and transparency of operations. So by using blockchain, you’re showing your
        customers what you’re doing and they know that they can trust you, you’re committing to be a
        high integrity business. I think that’s the most important thing. If you are building,
        selecting, or using the blockchain solutions, you are definitely getting a reputation boost
        from your customers and protecting yourself from malicious actors.
      </p>

      <figure className="wp-block-pullquote">
        <blockquote>
          <p>
            Transformation to decentralized governance will bring immediate benefits to society and
            it’s not going to be a “Cloud” anymore. I see it as the next big step in technology
            evolution. All the ideas, components are already here to make it happen and developers
            are already building.
          </p>
        </blockquote>
      </figure>

      <p>
        <strong>
          Back to this concept of “Kill the Cloud”, that’s an interesting concept. How and why does
          blockchain kill the cloud?&nbsp;
        </strong>
      </p>

      <p>
        The cloud in our world is infrastructure as a service. It’s foundation for storage,
        computation, data warehousing, for hosting your applications and for providing tools for
        these applications to run. All of these services provided by the cloud right now boils down
        to a datacenter and then to a physical or virtual server, where your data is stored or an
        application is installed. The biggest issue is that you have to ultimately trust your
        infrastructure provider, a commercial company,&nbsp; with your data, with your business and
        your life and this is just wrong. All of that can be transformed into having a system that
        is distributed without a single entity which makes all the decisions about what should
        happen to your API, to your files, to your hosting, to your application. So your tweets
        won’t disappear magically, the application you’re using won’t be thrown from the app store,
        and your private data won’t be conveniently shared with affiliated parties who pay for it.
      </p>

      <p>
        Transformation to decentralized governance will bring immediate benefits to society and it’s
        not going to be a “Cloud” anymore. I see it as the next big step in technology evolution.
        All the ideas, components are already here to make it happen and developers are already
        building. We have distributed file systems, high performance blockchains such as EOS, and we
        have everything in our hands to leverage that and to deliver really transparent “Zero Cloud”
        services to the world.&nbsp;
      </p>

      <p>
        <strong>
          So if “The Cloud” is kind of the Web2 version, then you said “it’s not going to be a cloud
          anymore”, that it can be distributed infrastructure… is it a nebula?
        </strong>
      </p>

      <p>Yeah, that can be a great term for it, honestly, we should brand it.</p>

      <p>
        <strong>
          It seems like if you’re going to kill “The Cloud”, you have to have a replacement for it.
          And it can’t just be Cloud 3.0, because that’ll be boring.
        </strong>
      </p>

      <p>Yep. Leap. It’s here already.</p>

      <figure className="wp-block-pullquote">
        <blockquote>
          <p>
            If the technology is open source and belongs to people, then it will live forever.
            That’s the whole point.
          </p>
        </blockquote>
      </figure>

      <p>
        <strong>
          Speaking of Leap, maybe you could talk about what kind of impact this move to a community
          developed and maintained codebase with Antelope, and its Leap implementation, will have.
          Also, what attracted you to this project to begin with?
        </strong>
      </p>

      <p>
        I strongly believe that the Antelope Ecosystem is a perfect foundation to build on for the
        next generation web. The amount of brain power and talent contributing to it is unbelievable
        and the technology stack selected is the most scalable, performant and reliable.&nbsp;
      </p>

      <p>
        Leap code quality is very high and development processes are at the highest standards for
        enterprise applications. Another important thing to mention is that Leap implementation is
        very modular, and therefore can be easily customized and adapted to a particular needs.
      </p>

      <p>
        Also, I think it’s really worth mentioning that since Antelope Leap, this really shows the
        world, it really shows people who are using it or considering to use it, that they can
        reliably spend their resources and time on integration and we will help them, and rest
        assured with the community around it and community developing it, it will be always
        supported. If the technology is open source and belongs to people, then it will live
        forever. That’s the whole point.
      </p>

      <p>
        And the last thing I would like to mention is the ease of use, it is very important. Leap
        design and implementation feature very clean and lean, easy to grasp concepts and
        interfaces, perfect for making high performance, easy to understand and use applications
        without tons of unneeded bloat or bias to a particular use case. With tools like DUNE you
        can start exploring all the benefits of EOS blockchain immediately without any burdens of
        setup and configuration.
      </p>

      <figure className="wp-block-pullquote">
        <blockquote>
          <p>
            I think the EOS blockchain is the most attractive piece of technology today that has the
            power to make the world a better place. EOS has an extremely robust codebase, written in
            the most efficient programming language on Earth by the top software developers with
            decades of experience.
          </p>
        </blockquote>
      </figure>

      <p>
        <strong>Tell us a bit about </strong>
        <a href="https://docs.eosnetwork.com/docs/latest/getting-started/try-antelope-in-dune/">
          <strong>DUNE</strong>
        </a>
        <strong>
          (Docker Utilities for Node Execution). I understand it’s a tool to abstract over NodeEOS,
          cleos, the CDT (Contract Development Toolkit), and other services. Why is this important,
          and who will this affect?
        </strong>
      </p>

      <p>
        With DUNE right now, you can pretty much start to develop on EOS in minutes on the operating
        system of your choice. You can use it on Windows, you can use it on Linux and Mac. It’s
        really a great tool and I invite everyone to try it out.
      </p>

      <p>
        It is Docker based. It will create and install all the dependencies that you would need and
        will hide all the complexities and configurations of running a chain from you allowing you
        to focus on your app. You can start playing with smart contracts in no time, and that’s
        where it shines.
      </p>

      <p>
        <a href="https://docs.eosnetwork.com/docs/latest/getting-started/try-antelope-in-dune/">
          DUNE
        </a>{' '}
        is definitely amazing and it’s very easy to use.
      </p>

      <p>
        <strong>
          Why did you want to join the ENF, and what do you think that EOS has to offer?
        </strong>
      </p>

      <p>
        I think the EOS blockchain is the most attractive piece of technology today that has the
        power to make the world a better place. EOS has an extremely robust codebase, written in the
        most efficient programming language on Earth by the top software developers with decades of
        experience. Extremely high transaction throughput and built-in scalability makes it suitable
        for most challenging tasks now.
      </p>

      <p>
        And the most important part, as I also mentioned, is the incredible, organically grown ENF
        team behind it.&nbsp;&nbsp;
      </p>

      <p>
        <strong>
          With your product experience and engineering background, where do you think EOS should
          focus when you think about enterprise applications?&nbsp;
        </strong>
      </p>

      <p>
        Any enterprise that can translate a boost in their customer confidence into profits will
        benefit from integration with EOS. From GameFi to supply chains, to pharmaceuticals, to
        conducting clinical trials, to many, many other areas.&nbsp;
      </p>

      <img src="images/projects/moon.jpg" alt="Moon – Astrophotography by Vlad Tereshkov" />
      <h4>Moon – Astrophotography by Vlad Tereshkov</h4>

      <p>
        <strong>
          You said that C++ is the most efficient programming language on earth. Is that something
          you’d stand by?
        </strong>
      </p>

      <p>
        Assembly is probably faster if you know what you are doing, but you won’t get far with it
        these days. For the high level languages I love C++ and newest revisions of it have made it
        way more efficient and pleasant to use than it was some 20 years ago.
      </p>

      <p>
        <strong>So C++ is evolving?</strong>
      </p>

      <p>
        Yes it’s evolving a lot. And in the right direction. It has a huge community and many new
        features originating from developer requests that make it better and better.
      </p>

      <p>
        <strong>
          If I tried learning C++, say in 1995, and then I tried again today, would it be a lot
          easier?
        </strong>
      </p>

      <p>
        I wouldn’t say it would be a lot easier now, but definitely a much more pleasant and
        rewarding experience. You have more resources, better resources, crowd wisdom, code samples
        and you can enjoy new fantastic language features. You can expect to get off the ground
        faster. The language itself is much more advanced. It is totally unfair to claim these days
        that C++ is harder to learn than other languages, it’s definitely not. And by mastering C++
        you would learn foundational principles resulting in a better code for any language, and
        that can slip from you if you start with something way more high level.
      </p>

      <p>
        <strong>What other comparable languages do you program in besides C++?</strong>
      </p>

      <p>
        I used to write code in many languages. Java, Python, Pearl, Javascript, Typescript, Rust,
        Go and others…&nbsp; They are all wonderful and have a time and place for a variety of
        projects, but C++ always attracted me with how clean and lean it is, how much control you
        have over your code execution and how fast your code can run.
      </p>

      <p>
        <strong>
          Of all these languages though, you think C++ is the clear winner at that level?
        </strong>
      </p>

      <p>
        Yeah, performance-wise it’s definitely a solid winner. Also it’s a solid winner in my
        opinion from a code architecture standpoint, sort of thinking-wise. This makes it a perfect
        choice for core blockchain foundation.
      </p>

      <p>
        <strong>Thinking-wise?</strong>
      </p>

      <p>
        Yeah, it really encourages you to follow and use best practices, think about memory
        management, multithreading, templates and other things that are totally hidden from you in
        many other languages.&nbsp; That contributes to a better control of what code will do,
        dramatically less unexpected failures and very high efficiency of running your code. And
        that’s exactly what you want to use in your mission critical 24/7 enterprise application.
      </p>

      <p>
        <strong>It’s not easy to hide mistakes.</strong>
      </p>

      <p>
        Yeah, that’s a good way to put it! Every time a developer is writing code, they balance
        many, many things. When working on high performance real-time applications that can handle a
        lot of data and communications C++ offers developers a fantastic mix of time proven
        language, support on many platforms and a huge community base. It gives you a freedom to
        control many lower level application functions that is hugely important when you want to
        scale and bring your solution to real life.
      </p>

      <p>
        That was a great exposé on C++. We can talk about languages again some other time, because I
        know there are other languages that are perhaps a bit more accessible and…
      </p>

      <p>
        I believe that accessibility is a relative term that should be applicable in a particular
        context. For example lots of scientists use Python, which is highly awarded as being very
        accessible. It’s not the fastest, but it has good computational libraries and they teach
        this language starting from high school. But if you try to start building your core chain on
        it, you are building your house on the sand, you will face issues down the road that would
        be hard to overcome and accessibility would be your least concern at this point..&nbsp;
      </p>

      <p>
        <strong>
          Interesting. Okay. Well, this is good. I’m glad we can dispel some of these myths around
          C++.
        </strong>
      </p>

      <p>
        Yeah, I think C++ is a fantastic choice for software development, especially for high
        performance systems, computer games where frames per second matters, artificial intelligence
        and many other areas.&nbsp; That said, I am looking forward to seeing different interface
        implementations for EOS blockchain, like on Rust or Go for example, this will extend our
        technology to people who know these languages well and they can use it right out of the box.
      </p>

      <figure className="wp-block-pullquote">
        <blockquote>
          <p>
            My favorite thing to do is to buy some piece of broken tech like a rare motherboard,
            amplifier or even vintage computer somewhere, restore it, fix it and make it shine
            again.
          </p>
        </blockquote>
      </figure>

      <p>
        <strong>Do you have any hobbies or activities that get you away from the screen?</strong>
      </p>

      <p>
        Oh, it’s too many to list, just not enough time for everything. I still love to tinker with
        hardware in terms of soldering things, creating electronics. My favorite thing to do is to
        buy some piece of broken tech like a rare motherboard, amplifier or even vintage computer
        somewhere, restore it, fix it and make it shine again.
      </p>

      <img src="images/projects/planets.jpg" alt="Jupiter, Mars, & Saturn — Astrophotography by Vlad Tereshkov" />
      <h4>Jupiter, Mars, & Saturn — Astrophotography by Vlad Tereshkov</h4>

      <p>
        <strong>What do you do with this motherboard once you buy it and get it home?</strong>
      </p>

      <p>
        I’ll find an issue and repair it, if possible, improve it. Then overclock it into oblivion
        and have fun with it. The computer I’m using right now was built this way. I really enjoy
        understanding the thought process of engineers behind it, there are so many hidden gems and
        you can read it from the board itself.&nbsp;
      </p>

      <figure className="wp-block-pullquote">
        <blockquote>
          <p>
            I love that astrophotography is really on the edge of astronomy, optics, computer vision
            and complex computations.
          </p>
        </blockquote>
      </figure>

      <p>
        I also enjoy astrophotography and restoring vintage telescopes. I love that astrophotography
        is really on the edge of astronomy, optics, computer vision and complex computations. When
        you make a picture of Mars, in most cases you are not making just one picture, you’re making
        thousands of images. And then you use special software to “glue” them all together and
        extract details. For example, a trous wavelet transform and fourier transform are just a
        couple of methods frequently used to remove noise and uncover details. There are hundreds of
        other algorithms available to explore. It’s especially fun to write your own software to
        process these images.
      </p>

      <p>
        I have four dogs. I’m pretty active with pet rescue organizations. I really enjoy tinkering
        with cars, rebuilding engines and transmissions. And as I said, the list goes on…
      </p>

      <p>
        <strong>What kind of fancy classic car do you have?</strong>
      </p>

      <p>
        I always loved American cars, and I was pretty seriously into drag racing when I was
        younger. I still have an older Camaro and a Firebird. They are pretty easy to work on, and
        they have lots of low-end torque.
      </p>

      <p>
        <strong>What year Firebird?</strong>
      </p>

      <p>
        It’s ’96. It’s not classic yet but getting there, with a 383 stroker motor and manual T56
        transmission. And it’s lots of fun to drive!
      </p>

      <p>
        Once, years ago, I had it in front of my house on cinder blocks, because I removed the
        transmission to replace a fried clutch. And one of my friends, who dropped me at my house,
        looked at it and said, “For the person who is a foreigner, you assimilated really well
        enough in the United States, because you have a Trans Am on the cinder blocks in your front
        yard. You are a real American!”.&nbsp;
      </p>

      <p>
        <strong>Haha, that’s classic. And you’re an all-around engineer besides!</strong>
      </p>

      <p>
        Yeah. I have never been bored in my life, ever. I always feel that I don’t have enough time
        in the day. I like wrenching on stuff, for sure, so that’s something I really enjoy
        doing.&nbsp;
      </p>

      <p>
        <strong>
          What advice would you give to those wanting to build on blockchain? Young programmers, or
          anybody interested in getting into it?
        </strong>
      </p>

      <p>
        So, first of all, they should not listen to sales pitches. They should evaluate various
        technologies and see for themselves with solutions like DUNE, what blockchain can do for
        you. And if they like it, they can start building. And another thing to keep in
        mind—blockchain is not a silver bullet—and it shouldn’t ever be that. You need to be very
        aware of how you’re going to use it. It has its own fantastic advantages and features and
        also some limitations coming from the nature of a blockchain itself. Spend some time
        collaboratively with your team members to evaluate all the options, and how you want to
        architect your solution, etc. I would say, do your homework well before you start coding and
        it will be a success story. And never be afraid of trying something new and asking for
        help.&nbsp;
      </p>

      <figure className="wp-block-pullquote">
        <blockquote>
          <p>
            I see that applications of a decentralized consensus in combination with AI would be
            highly important for next generation web search engines and generally in
            knowledge-mining and semantic systems.
          </p>
        </blockquote>
      </figure>

      <p>
        <strong>What are your future aspirations? Is there life after blockchain?</strong>
      </p>

      <p>
        Blockchain is one of the amazing technologies that has the potential to make the world a
        better place. There are many more exciting technologies that can contribute to this vision,
        some related to blockchain, some not.&nbsp; I see that applications of a decentralized
        consensus in combination with AI would be highly important for next generation web search
        engines and generally in knowledge-mining and semantic systems. And I’m really excited about
        all the developments in robotics and AI. As a former data scientist, I did a lot of
        predictive modeling before, trained classifiers and neural networks and the progress I am
        seeing right now in this area is incredible.
      </p>

      <p>
        To summarize, I am a big supporter of the technologies that have potential to improve your
        privacy, secure rights to your property, liberate you from the decisions made by single
        commercial entities that are not always in your interests, and generally make your life
        better and safer. So there is no such thing as “after blockchain”, especially since it’s
        supposed to be a permanent ledger, by definition.
      </p>

      <p>
        <strong>
          Well Vlad, thanks for your time and your insights, and for setting the record straight on
          C++!&nbsp; I appreciate all the experience you bring to EOS.
        </strong>
      </p>

      <p>
        Vlad: Thank you so much for your time and for the great questions Brandon, it’s always a
        pleasure!&nbsp; I am super excited to help push EOS to the next level that will make a
        meaningful, positive impact on everyone’s lives.
      </p>
    </article>
  </Main>
);

export default Interview;
