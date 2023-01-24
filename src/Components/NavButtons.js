export default function NavButtons({ page, navNext, navPrev }) {
  return (
    <div>
      <button disable={page === 1} onClick={navPrev}>
        Back
      </button>
      <button onClick={navNext}>Next</button>
    </div>
  );
}
