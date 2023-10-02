function CourseElement({ course_title, course_img, course_desc } )  {
    return (
      <div className="mt-4 col-sm-6 col-lg-3">
       {/* <h2 style={style.title_style}>{course_title}</h2> */}
        <img src={course_img} alt="" className="course__image" />
      </div>
      
    );
 }
 
export default CourseElement;