import React from "react";
import { ProgressBar } from "react-bootstrap";

function ProgrammingSkill() {
  const now = 80;
  const now2 = 70;
  const now3 = 70;
  const now4 = 75;
  const now5 = 65;
  const now6 = 65;
  const now7 = 65;
  const now8 = 80;
  const now9 = 83;
  return (
    <div>
      <div className="row">
        <div className="col-md-6 d-md-block d-none">
          <h3>My creative skills & experiences.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ratione error est recusandae consequatur, iusto illum
            deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate
            recusandae laudantium esse, harum animi aspernatur quisquam et
            delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad
            delectus natus aut hic explicabo minus quod.
          </p>
        </div>
        <div className="col-md-6">
          <label for="exampleInputEmail1">Html5</label>
          <ProgressBar variant="success" now={now} label={`${now}%`} />
          <label for="exampleInputEmail1" className="mt-2">
            Css3
          </label>
          <ProgressBar variant="success" now={now2} label={`${now2}%`} />
          <label for="exampleInputEmail1" className="mt-2">
            JavaScript
          </label>
          <ProgressBar variant="success" now={now3} label={`${now3}%`} />
          <label for="exampleInputEmail1" className="mt-2">
            React.js
          </label>
          <ProgressBar variant="success" now={now4} label={`${now4}%`} />
          <label for="exampleInputEmail1" className="mt-2">
            MongoDB
          </label>
          <ProgressBar variant="success" now={now5} label={`${now5}%`} />
          <label for="exampleInputEmail1" className="mt-2">
            Node.js
          </label>
          <ProgressBar variant="success" now={now6} label={`${now6}%`} />
          <label for="exampleInputEmail1" className="mt-2">
            Express.js
          </label>
          <ProgressBar variant="success" now={now7} label={`${now7}%`} />
          <label for="exampleInputEmail1" className="mt-2">
            Bootstrap-5
          </label>
          <ProgressBar variant="success" now={now8} label={`${now8}%`} />
          <label for="exampleInputEmail1" className="mt-2">
            Tailwind CSS
          </label>
          <ProgressBar variant="success" now={now9} label={`${now9}%`} />
        </div>
      </div>
    </div>
  );
}

export default ProgrammingSkill;
