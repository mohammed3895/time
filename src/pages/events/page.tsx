"use client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useEffect, useState } from "react";
import { EVENTS_DATA, Event } from "@/constants/eventData";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import CreateEventModal from "@/components/event/CreateEventModal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const localizer = momentLocalizer(moment);

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null); // State to hold the selected event

  useEffect(() => {
    setEvents(EVENTS_DATA);
  }, []);

  const handleEventClick = (event: Event) => {
    setIsOpen(true);
    setSelectedEvent(event);
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((e) => e.id !== selectedEvent?.id));
    setIsOpen(false);
  };

  function formatDate(date: string | Date) {
    return moment(date).format("MMM DD, YYYY");
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <AlertDialog open={isOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex flex-col items-start gap-1">
              <div className="text-xl text-primary font-semibold">
                {selectedEvent?.title}
              </div>
              <div className="flex items-center gap-3">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className="font-semibold text-foreground text-sm">
                    Start Date
                  </span>{" "}
                  {selectedEvent?.start ? formatDate(selectedEvent.start) : ""}
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className="font-semibold text-foreground text-sm">
                    End Date
                  </span>{" "}
                  {selectedEvent?.end ? formatDate(selectedEvent.end) : ""}
                </p>
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription>
              {selectedEvent?.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsOpen(false)}>
              Close
            </AlertDialogCancel>
            <Dialog>
              <DialogTrigger>
                <Button variant="destructive">Delete</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose>Cancel</DialogClose>
                  <Button variant="destructive" onClick={handleDeleteEvent}>
                    Delete
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className="mx-auto w-full md:w-3/4 p-4 bg-background rounded-lg shadow-xl">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          className="rounded-lg bg-background shadow-xl w-full "
          onDoubleClickEvent={handleEventClick}
          onSelectEvent={handleEventClick}
        />
      </div>
      <CreateEventModal />
    </div>
  );
};

export default EventsPage;
