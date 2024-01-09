import AccordionCard from "@/components/Common/AccordionCard";
import AccordionAnswerText from "@/components/Courses/AccordionAnswerText";
import JoinNow from "@/components/Courses/JoinNow";
import SearchCourse from "@/components/Courses/SearchCourse";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import CourseCard from "@/shared/CourseCard";
import MetaTag from "@/shared/MetaTag";
import { useRouter } from "next/router";
import { useState } from "react";
import coursesList from "../../../public/db/course.json";

const CoursesPage = () => {
  const { courses } = coursesList;
  const [courseLoad, setCourseLoad] = useState(6);
  const router = useRouter();
  const status = router.query.type;

  let filterCourses = courses.filter(
    (course) => course.courseStatus === status
  );

  const coursesFilter = [
    "All Course",
    "Online Courses",
    "Offline Courses",
    "Recorded Courses",
  ];
  const catagories = [
    "Wordpress",
    "Digital Marketing",
    "Graphics Design",
    "UX/UI Design",
    "APP Developer with Flutter",
    "Front-End Development",
    "Lead & Data Entry",
    "Visual Design Fundamentals",
    "Prototyping and Wireframing",
  ];
  return (
    <div className="container">
      <MetaTag title="Courses" />
      <div className="text-center my-10">
        <h1 className="text-5xl font-bold mb-2">Courses</h1>
        <p className="w-3/4 mx-auto">
          Our comprehensive course catalog encompasses a wide range of subjects,
          from in-demand technical skills to creative pursuits and personal
          development topics. Delve into the intricacies of coding, master the
          art of photography, or unlock the secrets of effective communication.
        </p>
        <SearchCourse />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-12">
        <div className="space-y-4">
          <AccordionCard title="Courses">
            {coursesFilter.map((item, index) => (
              <AccordionAnswerText key={index} data={item} />
            ))}
          </AccordionCard>

          <AccordionCard title="Course Categories">
            {catagories.map((item, index) => (
              <AccordionAnswerText key={index} data={item} />
            ))}
          </AccordionCard>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filterCourses.length > 0 &&
              filterCourses
                .slice(0, courseLoad)
                .map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
          </div>
          {filterCourses.length === 0 && (
            <p className="text-center text-xl">{status} Courses not found</p>
          )}
          {filterCourses.length > 0 && (
            <Button
              className="mt-8 mx-auto block"
              onClick={() => setCourseLoad(courseLoad + 6)}
            >
              See More
            </Button>
          )}
        </div>
      </div>
      <JoinNow />
    </div>
  );
};

export default CoursesPage;

CoursesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};