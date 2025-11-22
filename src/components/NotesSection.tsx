import { useState } from 'react';
import { useNotes } from '@/hooks/useNotes';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { StickyNote, Plus, Trash2, Edit2, Check, X } from 'lucide-react';

interface NotesSectionProps {
  lessonId: string;
}

const NotesSection = ({ lessonId }: NotesSectionProps) => {
  const { notes, addNote, updateNote, deleteNote } = useNotes(lessonId);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [showAddNote, setShowAddNote] = useState(false);

  const handleAddNote = () => {
    if (newNoteContent.trim()) {
      addNote(lessonId, newNoteContent);
      setNewNoteContent('');
      setShowAddNote(false);
    }
  };

  const handleStartEdit = (noteId: string, content: string) => {
    setEditingNoteId(noteId);
    setEditContent(content);
  };

  const handleSaveEdit = () => {
    if (editingNoteId && editContent.trim()) {
      updateNote(editingNoteId, editContent);
      setEditingNoteId(null);
      setEditContent('');
    }
  };

  const handleCancelEdit = () => {
    setEditingNoteId(null);
    setEditContent('');
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <StickyNote className="w-5 h-5 text-yellow-500" />
          ملاحظاتي الشخصية
        </h3>
        {!showAddNote && (
          <Button
            onClick={() => setShowAddNote(true)}
            size="sm"
            className="gap-2"
          >
            <Plus className="w-4 h-4" />
            إضافة ملاحظة
          </Button>
        )}
      </div>

      {showAddNote && (
        <Card className="p-4 mb-4 border-2 border-yellow-200 dark:border-yellow-700">
          <Textarea
            value={newNoteContent}
            onChange={(e) => setNewNoteContent(e.target.value)}
            placeholder="اكتب ملاحظتك هنا..."
            className="mb-2 min-h-[100px]"
          />
          <div className="flex gap-2 justify-end">
            <Button
              onClick={() => {
                setShowAddNote(false);
                setNewNoteContent('');
              }}
              variant="outline"
              size="sm"
            >
              <X className="w-4 h-4 ml-1" />
              إلغاء
            </Button>
            <Button onClick={handleAddNote} size="sm">
              <Check className="w-4 h-4 ml-1" />
              حفظ
            </Button>
          </div>
        </Card>
      )}

      {notes.length === 0 && !showAddNote && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <StickyNote className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>لا توجد ملاحظات بعد. أضف ملاحظتك الأولى!</p>
        </div>
      )}

      <div className="space-y-3">
        {notes.map((note) => (
          <Card key={note.id} className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700">
            {editingNoteId === note.id ? (
              <>
                <Textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="mb-2 min-h-[100px]"
                />
                <div className="flex gap-2 justify-end">
                  <Button onClick={handleCancelEdit} variant="outline" size="sm">
                    <X className="w-4 h-4 ml-1" />
                    إلغاء
                  </Button>
                  <Button onClick={handleSaveEdit} size="sm">
                    <Check className="w-4 h-4 ml-1" />
                    حفظ
                  </Button>
                </div>
              </>
            ) : (
              <>
                <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap mb-2">
                  {note.content}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(note.timestamp).toLocaleDateString('ar-EG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleStartEdit(note.id, note.content)}
                      variant="ghost"
                      size="sm"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => deleteNote(note.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700 dark:text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NotesSection;
