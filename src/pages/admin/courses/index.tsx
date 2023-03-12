import Link from "next/link";

export default function Courses() {
  return (
    <div>
        <Link href="/admin/courses/math">
            Математика
        </Link>
        <br />
        <Link href="/admin/courses/js-programming">
            Програмиране
        </Link>
        <br />
        <Link href="/admin/courses/web">
            Уеб технологии
        </Link>
    </div>
  );
}
