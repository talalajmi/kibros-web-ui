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
    <div className="flex justify-center">
      <div
        className={styles.container}
        onClick={() => router.push(publicRoutes.lesson.replace(":id", "1"))}
      >
        <Image src={props.imagePath} alt="kibros-logo" layout="fixed" />
        <div className="absolute top-0 right-0 flex h-full flex-col items-end justify-between p-20">
          <div className="relative ">
            <Circle
              size={61}
              color={props.isPaid ? kiBrosGreenColor : kiBrosOrangeColor}
            />
            <PlayIcon
              size={24}
              color="#000000"
              className="absolute top-20 left-[19px]"
            />
          </div>

          <div className="text-right text-xl text-white">
            <p>{props.lessonName}</p>
            <p>{props.lessonDuration}</p>
          </div>
        </div>
        {props.isNew && (
          <div className="absolute top-0">
            <Image src={newimg} alt="kibros-logo" objectFit="cover" />
          </div>
        )}
        <div
          className={`${
            props.isPaid ? "bg-success" : "bg-secondary"
          } relative bottom-12 h-5 rounded-bl-10 rounded-br-10 `}
        ></div>
        <div className="flex items-center justify-end">
          <div
            className={`flex w-140 items-center justify-center rounded-100 ${
              props.isPaid ? "bg-success/[0.2]" : "bg-secondary/[0.2]"
            } text-center ${props.isPaid ? "text-success" : "text-secondary"}`}
          >
            {props.isPaid ? "عضوية خاصه" : "مجاني"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lesson;
