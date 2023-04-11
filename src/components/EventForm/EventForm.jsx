import React from "react"

function EventForm({ handleChange, handleSubmit, formData, buttonText }) {
  const {
    title,
    description,
    image,
    online,
    location,
    min_attendees,
    max_attendees,
  } = formData

  return (
    <div className="min-h-screen bg-base-200 py-16 px-[20%]">
      <div className="card w-full shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label" htmlFor="title">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter title"
              className="input input-bordered"
              id="title"
              value={title}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="description">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              onChange={handleChange}
              id="description"
              value={description}
              placeholder="Enter description"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="image">
              <span className="label-text">Image</span>
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="image"
              placeholder="Enter Image URL"
              value={image}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label cursor-pointer" htmlFor="online">
              <span className="label-text">Online</span>
              <input
                onChange={handleChange}
                type="checkbox"
                id="online"
                checked={online}
                className="checkbox"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="location">
              <span className="label-text">Location</span>
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="location"
              placeholder="Enter Event Location"
              value={location}
              className="input input-bordered"
            />
          </div>

          <div className="flex justify-between gap-4">
            <div className="form-control grow">
              <label className="label" htmlFor="min-attendees">
                <span className="label-text">Minimum attendees</span>
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="min-attendees"
                placeholder="Enter Minimum Attendees"
                value={min_attendees}
                className="input input-bordered"
              />
            </div>

            <div className="form-control grow">
              <label className="label" htmlFor="max-attendees">
                <span className="label-text">Maximum attendees</span>
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="max-attendees"
                placeholder="Enter Maximum Attendees"
                value={max_attendees}
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EventForm
