import Image, { StaticImageData } from "next/image";
import styles from "./Lesson.module.css";
import newimg from "../../../public/assets/images/lesson/new-lesson.png";
import Circle from "../../icons/Circle";
import { kiBrosGreenColor, kiBrosOrangeColor } from "../../../utils/colors";
import PlayIcon from "../../icons/PlayIcon";
import { useRouter } from "next/router";
import { publicRoutes } from "../../../routes/PublicRoutes";

interface LessonProps {
  lessonName: string;
  lessonDuration: string;
  isNew?: boolean;
  isPaid: boolean;
  imagePath: StaticImageData;
}

const Lesson = (props: LessonProps) => {
  const router = useRouter();

  return (
    <div
      className="relative cursor-pointer space-y-5 rounded-10 transition duration-300 ease-in-out hover:scale-105"
      onClick={() => router.push(publicRoutes.lesson.replace("[id]", "1"))}
    >
      <div className="relative flex h-[217px] w-[350px] justify-end md:h-[267px] md:w-[430px]">
        <Image
          src={props.imagePath}
          alt="kibros-logo"
          objectFit="cover"
          className="rounded-8"
        />
        <div className="absolute grid h-full grid-flow-col grid-rows-2 p-20">
          <div className="flex flex-col items-end justify-center space-y-5">
            <p className="font-lalezar text-2xl text-white">
              {props.lessonName}
            </p>
            <p className="text-lg text-secondary-base" dir="rtl">
              - اساسيات التفريغ
            </p>
            <p dir="rtl" className="text-base text-white">
              {props.lessonDuration}
            </p>
          </div>
          <div className="relative flex items-end justify-end">
            <Circle
              size={50}
              color={props.isPaid ? kiBrosGreenColor : kiBrosOrangeColor}
            />
            <PlayIcon
              size={20}
              color="#000000"
              className="absolute bottom-[15px] right-[14px] "
            />
          </div>
        </div>
        {props.isNew && (
          <div className="absolute top-0 left-0">
            <Image src={newimg} alt="kibros-logo" objectFit="cover" />
          </div>
        )}

        <div
          className={`absolute bottom-0 h-5 w-full rounded-br-8 rounded-bl-8 ${
            props.isPaid ? "bg-success-base" : "bg-secondary-base"
          }`}
        ></div>
      </div>
      <div className="flex items-center justify-end">
        <div
          className={`flex w-140 items-center justify-center rounded-100 ${
            props.isPaid ? "bg-success-base/[0.2]" : "bg-secondary-base/[0.2]"
          } text-center ${
            props.isPaid ? "text-success-base" : "text-secondary-base"
          }`}
        >
          {props.isPaid ? "عضوية خاصه" : "مجاني"}
        </div>
      </div>
    </div>
  );
};
export default Lesson;
