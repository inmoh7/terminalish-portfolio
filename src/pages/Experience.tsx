import { experienceList } from '../data/experience';
const Experience = () => {
  return (
    <div>
      <h1 className="text-center text-xl mt-2">My Work Experience</h1>
      <div className="mt-4 mb-2 px-8">
        {experienceList &&
          experienceList.map((exp, index) => {
            return (
              <div className="py-1" key={index}>
                <div className="text-md flex justify-between">
                  <div className="font-semibold ">
                    <span>{index + 1} . </span>
                    <span className="text-blue-500">{exp.name}</span> -{' '}
                    {exp.position}
                  </div>
                  <div className="text-sm">{exp.timeline}</div>
                </div>
                <div className="font-semibold text-sm"></div>
                <div className="font-thin pl-6 ">
                  <div>{exp.description}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Experience;
