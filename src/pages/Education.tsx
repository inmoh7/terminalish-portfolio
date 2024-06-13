import { educationList } from '../data/education';
const Education = () => {
  return (
    <div>
      <h1 className="text-center text-xl mt-2">My Education</h1>
      <div className="mt-4 mb-2 px-8">
        {educationList &&
          educationList.map((education, index) => {
            return (
              <div className="py-1" key={index}>
                <div className="text-md flex justify-between">
                  <div className="font-semibold ">
                    <span>{index + 1} . </span>
                    {education.name}
                  </div>
                  <div className="text-sm">{education.timeline}</div>
                </div>
                <div className="font-thin pl-6 ">
                  <div>{education.qualification}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Education;
