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
      className={styles.container}
      onClick={() => router.push(publicRoutes.lesson.replace("[id]", "1"))}
    >
      <Image
        src={props.imagePath}
        alt="kibros-logo"
        objectFit="fill"
        height={267}
        width={430}
      />
      <div className="absolute top-0 right-0 flex h-full flex-col items-end justify-between pl-20 pt-20 pr-20 pb-48">
        <div className="relative ">
          <Circle
            size={50}
            color={props.isPaid ? kiBrosGreenColor : kiBrosOrangeColor}
          />
          <PlayIcon
            size={20}
            color="#000000"
            className="absolute top-[15px] left-[16px]"
          />
        </div>

        <div className="text-right text-xl text-white">
          <p>{props.lessonName}</p>
          <p>{props.lessonDuration}</p>
        </div>
      </div>
      {props.isNew && (
        <div className="absolute top-0">
          <Image src={newimg} alt="kibros-logo" objectFit="fill" />
        </div>
      )}
      <div
        className={`${
          props.isPaid ? "bg-success-base" : "bg-secondary-base"
        } relative bottom-12 h-5 rounded-bl-10 rounded-br-10 `}
      ></div>
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
