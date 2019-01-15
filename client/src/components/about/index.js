import React from 'react';
import BulletHank from './bulletHank.jpg';
export default function About (){

return(
<div className="container">
  <div className="block">
 <figure className="image is-16by9">
 <img src={BulletHank} />
</figure>
<h6 className="title is-6">Store owner Hank Kwon</h6>

<p className="content is-medium">Hobbyist store running for over 20 years, Bulletproof comics and games has helpful staff and a vibrant community of of store goers for Comic books, manga, CCGs, video games and skateboards and more</p>
    </div>
 </div>
    )
}
