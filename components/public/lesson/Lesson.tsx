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
      <div className="absolute top-0 right-0 flex h-full w-full flex-col items-end justify-between">
        <div className="relative p-20">
          <Circle
            size={50}
            color={props.isPaid ? kiBrosGreenColor : kiBrosOrangeColor}
          />
          <PlayIcon
            size={20}
            color="#000000"
            className="absolute top-[36px] left-[36px] "
          />
        </div>

        <div className="p-20 text-right text-xl text-white">
          <p>{props.lessonName}</p>
          <p>{props.lessonDuration}</p>
        </div>
        <div
          className={`${
            props.isPaid ? "bg-success-base-base" : "bg-secondary-base"
          } ${styles.identifier} `}
        ></div>
      </div>
      {props.isNew && (
        <div className="absolute top-0">
          <Image src={newimg} alt="kibros-logo" objectFit="fill" />
        </div>
      )}
      <div className="flex items-center justify-end">
        <div
          className={`flex w-140 items-center justify-center rounded-100 ${
            props.isPaid
              ? "bg-success-base-base/[0.2]"
              : "bg-secondary-base/[0.2]"
          } text-center ${
            props.isPaid ? "text-success-base-base" : "text-secondary-base"
          }`}
        >
          {props.isPaid ? "عضوية خاصه" : "مجاني"}
        </div>
      </div>
    </div>
  );
};
export default Lesson;
